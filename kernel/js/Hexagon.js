function Hexagon(_origin) {
	this.origin = _origin;
	this.origin.parentMap = this;
	this.origin.coord = [0,0];
	this.apps = {
		"0,0": this.origin,							//	1
		"2,0": new Sentinel(this, [2,0]),			//	2
		"-2,0": new Sentinel(this, [-2,0]),			//	3
		"2,2": new Sentinel(this, [2,2]),			//	4
		"2,-2": new Sentinel(this, [2,-2]),			//	5
		"-2,2": new Sentinel(this, [-2,2]),			//	6
		"-2,-2": new Sentinel(this, [-2,-2]),		//	7
		"0,2": new Sentinel(this, [0,2]),			//	8
		"0,-2": new Sentinel(this, [0,-2]),			//	9
		"-2,4": new Sentinel(this, [-2,4]),			//	10
		"0,4": new Sentinel(this, [0,4]),			//	11
		"2,4": new Sentinel(this, [2,4])			//	12
	};
}

Hexagon.prototype = {
	constructor: Hexagon,
	getApp: function(coord) {
		var result = this.apps[coord.toString()];
		return result;
	},
	addApp: function(newApp) {
		newApp.parentMap = this;

		var parent = this.origin;
		var dir = Math.floor(Math.random() * 11);						//	6
		var nearApps = parent.getNearAppsWithDir(dir);
		
		var nearApps_found = false;
		
		while(!nearApps_found) {
			for (var i = 0;i < nearApps.length;i++) {
				if (nearApps[i] != undefined) {
					nearApps_found = true;
					break;
				}
			}
			if (nearApps_found) break;
			dir = Math.floor(Math.random() * 11);
			nearApps = parent.getNearAppsWithDir(dir);
		}
		
		while (!this.listContainsSentinel(nearApps)) {
			var ridx = Math.floor(Math.random() * 11);					//	3
			var selected = nearApps[ridx];
			
			parent = selected;

			dir = dir + (ridx - 1);
			dir = (dir + 11) % 11;										//	6
			//console.log("Hexagon.addApp ridx= ", ridx, dir);
			if (parent != undefined)									//	
			nearApps = parent.getNearAppsWithDir(dir);
		}
		var sentinel_ok = false;
		while(!sentinel_ok) {
			newApp.coord = (function(){
				var allNearApps = parent.getNearAppsWithDir(dir);
				var idx = dir + this.indexOfSentinel(allNearApps) - 1;
				idx = (idx + 11) % 11;										//	6
				var diff = newApp.nearCoords[idx];
				return Utility.sumCoord(parent.coord, diff);
			}.bind(this)());
			sentinel_ok = this.apps[newApp.coord.toString()].isSentinel();
			if (!sentinel_ok) {
				dir++;
				if (dir > 11) dir = 1;
			}
		}
		/*nearApps = newApp.getNearApps();
		for (var i = 0; i < nearApps.length; i++) {
			var nearApp = nearApps[i];
			if (nearApp === undefined) {
				var nearCoord = Utility.sumCoord(newApp.coord, newApp.nearCoords[i]);
				if (nearCoord[0] >= -2 && nearCoord[0] <= 2 && nearCoord[1] >= -2 && nearCoord[1] <= 4)
				var sentinel = new Sentinel(this, nearCoord);
				this.apps[nearCoord.toString()] = sentinel;
			}
		}*/
		console.log("Hex AddApp coord = ", newApp.coord.toString(), newApp);
		this.apps[newApp.coord.toString()] = newApp;

	},

	listContainsSentinel: function(list) {
		for (var i = 0; i < list.length; i++) {
			var app = list[i];
			//console.log("listContainsSenintel ", i, app);
			if (app === undefined) continue;			//	добавлено
			if (app.isSentinel()) return true;
		}
		return false;
	},
	indexOfSentinel: function(list) {
		for (var i = 0; i < list.length; i++) {
			var app = list[i];
			if (app === undefined) continue;			//	добавлено
			if (app.isSentinel())
				return i;
		}
		return -1;
	}
};