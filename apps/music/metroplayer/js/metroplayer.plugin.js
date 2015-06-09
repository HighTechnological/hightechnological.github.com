var _0xa6e7 = ["extend", "selected", "removeClass", ".selected",
        "addClass", "\'", "replace", "title", "artist", "file",
        " by ", "text", ".song-title", ".song-artist", "play",
        "jPlayer", "setMedia", "html, flash",
        "<div id=\"metro-left-overlay\"></div>",
        "<div id=\"jp_container_N\" class=\"\">",
        "<div id=\"jquery_jplayer_N\" class=\"jp-jplayer\"></div>",
        "<div class=\"jp-gui\">", "<div class=\"jp-interface\">",
        "<div id=\"metro-left\">", "<div id=\"metro-controls\">",
        "<ul>",
        "<li id=\"metro-prev\" class=\"jp-prev\"><img src=\"metroplayer/img/prev.png\" /></li>",
        "<li id=\"metro-play\" class=\"jp-play\"><a href=\"javascript:;\"><img src=\"metroplayer/img/play.png\" /></a></li>",
        "<li id=\"metro-pause\" class=\"jp-pause\"><a href=\"javascript:;\" ><img src=\"metroplayer/img/pause.png\" /></a></li>",
        "<li id=\"metro-next\" class=\"jp-next\"><img src=\"metroplayer/img/forward.png\" /></li>",
        "</ul>", "</div>", "<div id=\"metro-progress\">",
        "<div class=\"jp-progress\">", "<div class=\"jp-seek-bar\">",
        "<div class=\"jp-play-bar\"></div>", "<ul id=\"track-info\">",
        "<li>Now playing</li>",
        "<li id=\"metro-time-lapse\"><span id=\"metro-duration\" class=\"jp-current-time\"></span> / <span id=\"metro-progress\" class=\"jp-duration\"></span></li>",
        "<div id=\"metro-song-info\">",
        "<li><div id=\"song-info-title\" class=\"song-title\"></div></li>",
        "<li><div id=\"song-info-artist\" class=\"song-artist\"></div></li>",
        "<br/><br/>",
        "<img src=\"metroplayer/img/full-screen.png\" id=\"metro-full-screen\" />",
        "<img src=\"metroplayer/img/playlist.png\" id=\"metro-playlist-open\"/>",
        "<div id=\"metro-playlist\">",
        "<img src=\"metroplayer/img/close.png\" id=\"metro-playlist-close\"/>",
        "<h1>now playing</h1>",
        "<ul id=\"metro-playlist-tracks\"></ul>",
        "<div id=\"metro-right\">",
        "<div id=\"metro-song-overview\">", "<h1>overview</h1>",
        "<li>", "<p class=\"label\">Song</p>",
        "<p class=\"entry song-title\"></p>", "</li>",
        "<p class=\"label\">Artist</p>",
        "<p class=\"entry song-artist\"></p>", "append", "height",
        "#jquery_jplayer_N", "css",
        "#metro-left, #metro-playlist, #metro-right, #metro-left-overlay",
        "metroplayer/js/jplayer/jquery.jplayer.min.js", "",
        "metroplayer/media/library.json", "%27", "mp3File",
        "<li><img class=\"metro-hidden\" src=\"\" ",
        "data-src=\'[{\"title\":\"", "\",\"artist\":\"",
        "\",\"file\":\"", "\"}]\'/><p id=\"playlist-song\">",
        "</p><p id=\"playlist-artist\">", "</p></li>",
        "#metro-playlist-tracks", "#metro-playlist-tracks li:first",
        "each", "getJSON", "ended", "event", "li", "next", "data-src",
        "attr", "img", "find", "parseJSON", ":last", "is", "bind",
        "metroplayer/js/jplayer/", "flash,html", "m4a, oga, mp3",
        "metadata", "#jp_container_N", ".jp-play", ".jp-pause",
        ".jp-seek-bar", ".jp-play-bar", "flash, html", "getScript",
        "#metro-playlist", ":visible", "medium", "fadeOut", "fadeIn",
        "preventDefault", "click",
        "#metro-playlist-open,#metro-playlist-close", "#metro-right",
        "#metro-left", "right-hidden", "hasClass", "0%", "100%",
        "animate", "71%", "33%", "#metro-full-screen", "live",
        "#metro-playlist-tracks li", "prev", ":first", ".jp-prev",
        ".jp-next", "fn"];
(function (_0x471fx1) {
    _0x471fx1[_0xa6e7[127]][_0xa6e7[0]]({
        metroPlayer: function (_0x471fx2) {
            var _0x471fx3 = {};
            var _0x471fx2 = _0x471fx1[_0xa6e7[0]](_0x471fx3,
                _0x471fx2);
            return this[_0xa6e7[78]](function () {
                function _0x471fx3(_0x471fx2, _0x471fx3) {
                    var _0x471fx4, _0x471fx5, _0x471fx6, _0x471fx7;
                    _0x471fx1(_0xa6e7[3])[_0xa6e7[2]](_0xa6e7[1]);
                    _0x471fx2[_0xa6e7[4]](_0xa6e7[1]);
                    _0x471fx4 = decodeURI(_0x471fx3[0][_0xa6e7[7]])[
                        _0xa6e7[6]](/%27/g, _0xa6e7[5]);
                    _0x471fx5 = decodeURI(_0x471fx3[0][_0xa6e7[8]])[
                        _0xa6e7[6]](/%27/g, _0xa6e7[5]);
                    _0x471fx6 = decodeURI(_0x471fx3[0][_0xa6e7[9]])[
                        _0xa6e7[6]](/%27/g, _0xa6e7[5]);
                    $text = _0x471fx4 + _0xa6e7[10] + _0x471fx5;
                    _0x471fx1(_0xa6e7[12])[_0xa6e7[11]](_0x471fx4);
                    _0x471fx1(_0xa6e7[13])[_0xa6e7[11]](_0x471fx5);
                    $musicPlayer[_0xa6e7[15]](_0xa6e7[16], {
                        mp3: _0x471fx6,
                        solution: _0xa6e7[17]
                    })[_0xa6e7[15]](_0xa6e7[14]);
                };
                obj = _0x471fx1(this);
                o = _0x471fx2;
                $template = _0x471fx1(_0xa6e7[18] + _0xa6e7[19] +
                    _0xa6e7[20] + _0xa6e7[21] + _0xa6e7[22] + _0xa6e7[
                    23] + _0xa6e7[24] + _0xa6e7[25] + _0xa6e7[26] +
                    _0xa6e7[27] + _0xa6e7[28] + _0xa6e7[29] + _0xa6e7[
                    30] + _0xa6e7[31] + _0xa6e7[32] + _0xa6e7[33] +
                    _0xa6e7[34] + _0xa6e7[35] + _0xa6e7[36] + _0xa6e7[
                    32] + _0xa6e7[32] + _0xa6e7[37] + _0xa6e7[38] +
                    _0xa6e7[39] + _0xa6e7[31] + _0xa6e7[32] + _0xa6e7[
                    40] + _0xa6e7[26] + _0xa6e7[41] + _0xa6e7[42] +
                    _0xa6e7[31] + _0xa6e7[43] + _0xa6e7[44] + _0xa6e7[
                    45] + _0xa6e7[32] + _0xa6e7[32] + _0xa6e7[32] +
                    _0xa6e7[32] + _0xa6e7[32] + _0xa6e7[46] + _0xa6e7[
                    47] + _0xa6e7[48] + _0xa6e7[49] + _0xa6e7[32] +
                    _0xa6e7[50] + _0xa6e7[51] + _0xa6e7[52] + _0xa6e7[
                    26] + _0xa6e7[53] + _0xa6e7[54] + _0xa6e7[55] +
                    _0xa6e7[56] + _0xa6e7[53] + _0xa6e7[57] + _0xa6e7[
                    58] + _0xa6e7[56] + _0xa6e7[31] + _0xa6e7[32] +
                    _0xa6e7[32] + _0xa6e7[32]);
                obj[_0xa6e7[59]]($template);
                $pageHeight = _0x471fx1(window)[_0xa6e7[60]]();
                $i = 0;
                $musicPlayer = _0x471fx1(_0xa6e7[61]);
                _0x471fx1(_0xa6e7[63])[_0xa6e7[62]]({
                    height: $pageHeight
                });
                _0x471fx1[_0xa6e7[102]](_0xa6e7[64], function () {
                    $first_song = _0xa6e7[65];
                    _0x471fx1[_0xa6e7[79]](_0xa6e7[66], function (
                        _0x471fx2) {
                        var _0x471fx3;
                        _0x471fx1[_0xa6e7[78]](_0x471fx2, function (
                            _0x471fx2, _0x471fx4) {
                            $title = encodeURI(_0x471fx4[_0xa6e7[7]])[
                                _0xa6e7[6]](/'/g, _0xa6e7[67]);
                            $artist = encodeURI(_0x471fx4[_0xa6e7[8]])[
                                _0xa6e7[6]](/'/g, _0xa6e7[67]);
                            $file = encodeURI(_0x471fx4[_0xa6e7[68]])[
                                _0xa6e7[6]](/'/g, _0xa6e7[67]);
                            if (_0x471fx2 == 0) {
                                _0x471fx1(_0xa6e7[12])[_0xa6e7[11]](
                                    decodeURI($title));
                                _0x471fx1(_0xa6e7[13])[_0xa6e7[11]](
                                    decodeURI($artist));
                                $first_song = decodeURI($file);
                            };
                            _0x471fx3 = _0xa6e7[69] + _0xa6e7[70] +
                                $title + _0xa6e7[71] + $artist +
                                _0xa6e7[72] + $file + _0xa6e7[73] +
                                decodeURI(_0x471fx4[_0xa6e7[7]]) +
                                _0xa6e7[74] + decodeURI(_0x471fx4[
                                _0xa6e7[8]]) + _0xa6e7[75];
                            _0x471fx1(_0xa6e7[76])[_0xa6e7[59]](
                                _0x471fx3);
                            if (_0x471fx2 == 0) {
                                _0x471fx1(_0xa6e7[77])[_0xa6e7[4]](
                                    _0xa6e7[1]);
                            };
                        });
                    });
                    $musicPlayer[_0xa6e7[15]]({
                        swfPath: _0xa6e7[92],
                        solution: _0xa6e7[93],
                        supplied: _0xa6e7[94],
                        preload: _0xa6e7[95],
                        volume: 0.8,
                        muted: false,
                        cssSelectorAncestor: _0xa6e7[96],
                        cssSelector: {
                            play: _0xa6e7[97],
                            pause: _0xa6e7[98],
                            seekBar: _0xa6e7[99],
                            playBar: _0xa6e7[100]
                        },
                        errorAlerts: false,
                        warningAlerts: false,
                        ready: function () {
                            _0x471fx1(this)[_0xa6e7[15]](_0xa6e7[16], {
                                mp3: $first_song,
                                solution: _0xa6e7[101]
                            });
                        }
                    })[_0xa6e7[91]](_0x471fx1[_0xa6e7[15]][_0xa6e7[81]][
                            _0xa6e7[80]], function (_0x471fx2) {
                        var _0x471fx4 = _0x471fx1(_0xa6e7[3])[_0xa6e7[
                            83]](_0xa6e7[82]),
                            _0x471fx5 = _0x471fx1[_0xa6e7[88]](
                                _0x471fx4[_0xa6e7[87]](_0xa6e7[86])[
                                _0xa6e7[85]](_0xa6e7[84]));
                        if (!_0x471fx4[_0xa6e7[90]](_0xa6e7[89])) {
                            _0x471fx3(_0x471fx4, _0x471fx5);
                        };
                    });
                });
                _0x471fx1(_0xa6e7[110])[_0xa6e7[109]](function (
                    _0x471fx2) {
                    var _0x471fx3 = _0x471fx1(_0xa6e7[103]);
                    if (_0x471fx3[_0xa6e7[90]](_0xa6e7[104])) {
                        _0x471fx3[_0xa6e7[106]](_0xa6e7[105]);
                    } else {
                        _0x471fx3[_0xa6e7[107]](_0xa6e7[105]);
                    };
                    _0x471fx2[_0xa6e7[108]]();
                });
                _0x471fx1(_0xa6e7[120])[_0xa6e7[109]](function (
                    _0x471fx2) {
                    var _0x471fx3 = _0x471fx1(_0xa6e7[111]),
                        _0x471fx4 = _0x471fx1(_0xa6e7[112]);
                    if (!_0x471fx3[_0xa6e7[114]](_0xa6e7[113])) {
                        _0x471fx3[_0xa6e7[117]]({
                            width: _0xa6e7[115]
                        }, 600, function () {
                            _0x471fx1(this)[_0xa6e7[4]](_0xa6e7[113]);
                            _0x471fx4[_0xa6e7[117]]({
                                width: _0xa6e7[116]
                            }, 600);
                        });
                    } else {
                        _0x471fx4[_0xa6e7[117]]({
                            width: _0xa6e7[118]
                        }, 600, function () {
                            _0x471fx3[_0xa6e7[2]](_0xa6e7[113]);
                            _0x471fx3[_0xa6e7[117]]({
                                width: _0xa6e7[119]
                            }, 600);
                        });
                    };
                    _0x471fx2[_0xa6e7[108]]();
                });
                _0x471fx1(_0xa6e7[122])[_0xa6e7[121]](_0xa6e7[109], function (
                    _0x471fx2) {
                    _0x471fx1(_0xa6e7[3])[_0xa6e7[2]](_0xa6e7[1]);
                    $o = _0x471fx1(this);
                    $o[_0xa6e7[4]](_0xa6e7[1]);
                    $json = _0x471fx1[_0xa6e7[88]]($o[_0xa6e7[87]](
                        _0xa6e7[86])[_0xa6e7[85]](_0xa6e7[84]));
                    _0x471fx3($o, $json);
                    _0x471fx2[_0xa6e7[108]]();
                });
                _0x471fx1(_0xa6e7[125])[_0xa6e7[109]](function (
                    _0x471fx2) {
                    var _0x471fx4 = _0x471fx1(_0xa6e7[3])[_0xa6e7[123]](
                        _0xa6e7[82]),
                        _0x471fx5 = _0x471fx1[_0xa6e7[88]](_0x471fx4[
                            _0xa6e7[87]](_0xa6e7[86])[_0xa6e7[85]](
                            _0xa6e7[84]));
                    if (!_0x471fx4[_0xa6e7[90]](_0xa6e7[124])) {
                        _0x471fx3(_0x471fx4, _0x471fx5);
                    };
                    _0x471fx2[_0xa6e7[108]]();
                });
                _0x471fx1(_0xa6e7[126])[_0xa6e7[109]](function (
                    _0x471fx2) {
                    var _0x471fx4 = _0x471fx1(_0xa6e7[3])[_0xa6e7[83]](
                        _0xa6e7[82]),
                        _0x471fx5 = _0x471fx1[_0xa6e7[88]](_0x471fx4[
                            _0xa6e7[87]](_0xa6e7[86])[_0xa6e7[85]](
                            _0xa6e7[84]));
                    if (!_0x471fx4[_0xa6e7[90]](_0xa6e7[89])) {
                        _0x471fx3(_0x471fx4, _0x471fx5);
                    };
                    _0x471fx2[_0xa6e7[108]]();
                });
            });
        }
    });
})(jQuery);