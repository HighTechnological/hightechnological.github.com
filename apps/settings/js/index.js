$(function(){ 
    localStorage.c = (localStorage.c || "0.0");
    localStorage.m = (localStorage.m || "0");
    localStorage.lapc = (localStorage.c || "0.0");
    localStorage.lapm = (localStorage.m || "0");
    
    localStorage.str = localStorage.str || $(".lap").html();
    $("#series").html(localStorage.str);
    
    var t, m, h, cl = $("#crono");
    var x = 1;
    
    if(localStorage.c !== "00.0"){
        $("#inicializar").removeClass("disabled");                      
        $("#inicializar").addClass("active"); 
    };
    
    function incr()     {   
                            if(localStorage.c >= 59){
                                localStorage.c = "0.0";
                                localStorage.c = +localStorage.c + 0.1; 
                                if(localStorage.m < 60){localStorage.m = +localStorage.m + 1; }
                                else{ localStorage.m = "0";};
                            }else{localStorage.c = +localStorage.c + 0.1;};
                             
                            if(localStorage.lapc >= 59){
                                localStorage.lapc = "0.0";
                                localStorage.lapc = +localStorage.lapc + 0.1;
                                if(localStorage.lapm < 60){localStorage.lapm = +localStorage.lapm + 1; }
                                else{ localStorage.lapm = "0" };
                            }else{localStorage.lapc = +localStorage.lapc + 0.1;};
                        };
    function mostrar()  {   
                            localStorage.c = (+localStorage.c).toFixed(1);
                            localStorage.m = (+localStorage.m).toFixed(0);
                            if(localStorage.c.toString().length === 3){localStorage.c = "0" + localStorage.c;};
                            if(localStorage.m.toString().length === 1){localStorage.m = "0" + localStorage.m;};
                            cl.html( localStorage.m + ":" + localStorage.c );
                            localStorage.lapc = (+localStorage.lapc).toFixed(1);
                            localStorage.lapm = (+localStorage.lapm).toFixed(0);
                            if(localStorage.lapc.toString().length === 3){localStorage.lapc = "0" + localStorage.lapc;};
                            if(localStorage.lapm.toString().length === 1){localStorage.lapm = "0" + localStorage.lapm;};
                            if($("#cambiar").html() === "Parar"){
                                $(".serie1").html( "Serie " + x + "<span>" + localStorage.lapm + ":" + localStorage.lapc + "</span>" )
                                localStorage.str = $(".lap").html();
                            };
                        };
    function arrancar() {
                            t = setInterval(function(){incr();mostrar();}, 100);
                        };
    function parar()    { clearInterval(t);  t=undefined; };
    function cambiar(event)     { event.preventDefault(); 
                                  if (!t){ 
                                      arrancar(); 
                                      $("#cambiar").html("Стоп"); 
                                      $("#inicializar").html("Серия");
                                      $("#inicializar").removeClass("disabled");                      
                                      $("#inicializar").removeClass("active");
                                      $("#cambiar").addClass("active");
                                  }else{ 
                                      parar();  
                                      $("#cambiar").html("Продолжить");
                                      $("#inicializar").html("Перезагрузить");
                                      $("#cambiar").removeClass("active");
                                      $("#inicializar").addClass("active");
                                  }; 
                                };
    
// Función de stop
   function stop(){
        if($("#inicializar").html() === "Серия"){
            if(!$(".serie1").length > 0){
                $("#series").html("<li class='serie1'></li>");
                $(".serie1").after("<li> Серия " + x + "<span>" + cl.html() + "</span></li>");
            }
            else{
            $(".serie1").after("<li> Серия " + x + "<span>" + localStorage.lapm + ":" + localStorage.lapc + "</span></li>");};
            x = ++x;
            localStorage.lapc="0.0"; 
            localStorage.lapm="0";
        }
        else{
            localStorage.c="0.0"; 
            localStorage.m="0";
            localStorage.lapc="0.0"; 
            localStorage.lapm="0";
            mostrar();
            $("#cambiar").html("Старт");
            $("#inicializar").removeClass("active");
            $("#inicializar").addClass("disabled");;
            $("#series").html("");
            localStorage.str = "";
            x = 1;
        };
   };
    
// Botones para activar las funciones    
    $("#cambiar").click(cambiar);
    $("#inicializar").click(function(event){ 
        event.preventDefault(); 
        stop();
    });
// Acciones tap y doubleTap sobre la clase .timmer    
    $(".timmer").on('tap', cambiar);
    $(".timmer").on('doubleTap', function(event){ 
        event.preventDefault(); 
        stop();
    });
    mostrar();
      
// Función de los botones para Desktop      
    $('.button').click(function(event){
        event.preventDefault();
        if($(this).hasClass('active')){
            return false;
        }else{
            $('.button').removeClass('active');
            $(this).addClass('active');
            
            if($(this).is('#analog')){
                $('.container').animate({ left: '0' }, 600);
            }
            else if($(this).is('#digital')){
                $('.container').animate({ left: '-100%' }, 600);
            }
            else if($(this).is('#cronomet')){
                $('.container').animate({ left: '-200%' }, 600);
            };
        };
      });
    
// Función de evento touch para el paso de página, Mobile swipeRight/Left 
      var i = $('.container');
      i.on('swipeRight', function(){
          if($('#analog').is('.active')){
               return false;
            }
            else if($('#digital').is('.active')){
                $('.button').removeClass('active');
                $('#analog').addClass('active');
                $('.container').animate({ left: '0' }, 600);
            }
            else if($('#cronomet').is('.active')){
                $('.button').removeClass('active');
                $('#digital').addClass('active');
                $('.container').animate({ left: '-100%' }, 600);
            };
      });
        i.on('swipeLeft', function(){
          if($('#analog').is('.active')){
                $('.button').removeClass('active');
                $('#digital').addClass('active');
                $('.container').animate({ left: '-100%' }, 600);
            }
            else if($('#digital').is('.active')){
                $('.button').removeClass('active');
                $('#cronomet').addClass('active');
                $('.container').animate({ left: '-200%' }, 600);
            }
            else if($('#cronomet').is('.active')){
                return false;
            };
        });

// Función Reloj Analógico y Digital
    function m_analog (){
        var d = new Date();
        var h = d.getHours();
        var m = d.getMinutes();
        var s = d.getSeconds();
        
    // Reloj Digital    
            if(h.toString().length === 1){h = "0" + h;};
            if(m.toString().length === 1){m = "0" + m;};
            if(s.toString().length === 1){s = "0" + s;}; 
        $('.a-count').html(h + ":" + m + "<small>:" + s + "</small");
        $('.b-count').html(h + ":" + m);
        
    // Reloj Analógico    
        h = "rotate(" + h * 30 + "deg)";
        m = "rotate(" + m * 6 + "deg)";
        s = "rotate(" + s * 6 + "deg)";
            $("#hora").css('transform', h);
            $("#minuto").css('transform', m);
            $("#segundo").css('transform', s);      
    };
    setInterval(function(){m_analog();}, 1000);
    m_analog();
        
// Formateo de la fecha
        var fech = new Date();
        var month = fech.getMonth(); 
                    if(month === 0){ month = "Январь"; }
                    else if(month === 1){ month = "Февраль"; }
                    else if(month === 2){ month = "Март"; }
                    else if(month === 3){ month = "Апрель"; }
                    else if(month === 4){ month = "Май"; }
                    else if(month === 5){ month = "Июнь"; }
                    else if(month === 6){ month = "Июль"; }
                    else if(month === 7){ month = "Август"; }
                    else if(month === 8){ month = "Сентябрь"; }
                    else if(month === 9){ month = "Октябрь"; }
                    else if(month === 10){ month = "Ноябрь"; }
                    else if(month === 11){ month = "Декабрь"; };
        var day_na = fech.getDay(); 
                    if(day_na === 0){ day_na = "Понедельник"; }
                    else if(day_na === 1){ day_na = "Вторник"; }
                    else if(day_na === 2){ day_na = "Среда"; }
                    else if(day_na === 3){ day_na = "Четверг"; }
                    else if(day_na === 4){ day_na = "Пятница"; }
                    else if(day_na === 5){ day_na = "Суббота"; }
                    else if(day_na === 6){ day_na = "Воскресенье"; };
        var day_nu = fech.getDate().toString();
        fech = day_na + ", " + month + " <strong>" + day_nu + "</strong>" ;
    
    $(".fecha").html(fech);   
 });
