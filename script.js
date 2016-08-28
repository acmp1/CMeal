// clase platillo
var Platillo = function(nombre, precio)
{
    this.nombrePlatillo = nombre;
    this.precio = precio;
}

// clase servicio
var Servicio = function(arr, nombre, numPlat, lat, lon)
{
    this.platillos = arr;
    this.numPlatillos = numPlat;
    this.latitud = lat;
    this.longitud = lon;
    this.nombreRest = nombre;
}

// crea platillos
var platillo1 = new Platillo("Pollo", 30);
var platillo2= new Platillo("Pescado", 25);
var platillo3= new Platillo("Sandwich", 15);
var platillo4= new Platillo("Pizza", 20);
var platillo5= new Platillo("Taco de arrachera", 15);
var platillo6= new Platillo("Sopa", 15);
var platillo7= new Platillo("Molletes", 10);
var platillo8= new Platillo("Chilaquiles", 15);

// arreglos de platilllos
var arr1 = [platillo1, platillo3, platillo7];
var arr2 = [platillo2, platillo4, platillo5];
var arr3 = [platillo6, platillo8, platillo1];
var arr4 = [platillo4, platillo8, platillo6];
var arr5 = [platillo1, platillo4, platillo5];

// objetos servicio
var servicio1 = new Servicio(arr1, "Chez Victor", 3, 25.647839, -100.290473 );
var servicio2 = new Servicio(arr2, "Ashtons", 3, 25.648913, -100.292490);
var servicio3 = new Servicio(arr3, "Tim Hortons", 3, 25.646038, -100.290891);
var servicio4 = new Servicio(arr4, "Comida Feliz", 3, 25.648458, -100.289040 );
var servicio5 = new Servicio(arr5, "Restaurante de clari", 3, 25.648850, -100.288573);

// declaracion arreglo de servicios
arrServicios = [servicio1, servicio2, servicio3, servicio4, servicio5];
var iContaServicios = 5;


var map;

function initMap(){
    map=new google.maps.Map(document.getElementById('map'),{
        center:{lat:25.651517,lng:-100.289669},
        zoom: 17
    });
    var infoWindow=new google.maps.InfoWindow({map: map});
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            var pos ={
                lat:position.coords.latitude,
                lng:position.coords.longitude
            };
            
            infoWindow.setPosition(pos);
            infoWindow.setContent('Ubicación Actual.');
            map.setCenter(pos);
        },function(){
            handleLocationError(true,infoWindow,map.getCenter());
        });
    } else{
        handleLocationError(false,infoWindow,map.getCenter());
        }
        
        var markers = new Array();
        // var markers = [];
          for(var iC = 0; iC < iContaServicios; iC++)
        {
             markers[iC] = new google.maps.Marker({
             position: new google.maps.LatLng(arrServicios[iC].latitud , arrServicios[iC].longitud),
             map: map,
             draggable:false,
             title: arrServicios[iC].nombreRest
             });
            
        
        }
        markers[0].addListener('click',function(){
            window.location.href='Cuadro.html';
            for(var conta=0;conta<arrServicios[0].numPlatillos;conta++)
            {
                $("#platillos").append("<div class="formato"><p>"+arrServicios[0].platillos[conta].nombrePlatillo+"  Precio: $"+arrServicios[0].platillos[conta].precio+"</p></div>")
            }
        });
        
        
    }
    function handleLocationError(browserHasGeolocation,infoWindow,pos){
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                                'Error: The Geolocation service failed.':
                                'Error: Your browser doesn\'t support geolocation');
        }
google.maps.event.addDomListener(window, 'load', initMap);

//clase usario
     var Usuario = function(nombre,password,tarjeta,correo)
{
     this.nombre=nombre;
     this.password=password;
    this.tarjeta=tarjeta;
    this.correo=correo;
}


// crea arreglo con objetos de usuario
var arrUsuario=[];
var ContaUsuario=0;
    
    var nombre="0",password="0",tarjeta="0",correo="0",passwordConfir="0";

$(document).ready(function(){
    
    
    /*passwordConfir=$('input[name=Confirmacion]').val();*/
        /*var input=$('input[name=Confirmacion]').focus(function(){
            input.css('outline-color','#00ff00')
        });
    }else
        {
            var input=$('input[name=Confirmacion]').focus(function(){
                input.css('outline-color','#ff0000')
            });*/
            
            // cuando pica registrar se pasan los valores de las cajitas a las variables
    $("#bRegistrar").click(function(){
        nombre=$('input[name=nUsuario]').val();
        correo=$('input[name=correo]').val();
        password=$('input[name=Contraseña]').val();
        tarjeta=$('input[name=tarjeta]').val();
        
        
        
        // si no hay nada en los datos 
        if((nombre==0)||(correo==0)||(password==0)||(tarjeta==0)||(password!=passwordConfir))
        {
            console.log("Datos inválidos");
        }
        else
        {
            arrUsuario[ContaUsuario++]= new Usuario(nombre,password,tarjeta,correo);
            
            /*var x=prompt(arrUsuario[ContaUsuario].nombre);
            if(x="Hola")
            {
                ContaUsuario++;
                $("#bRegistrar,a").attr('href',"Main.html");
            }*/
        }
    });
    $(window).resize(function(){
        if ($(window).width()<=580) {
            $("#logo").height(68.9);
            $("#logo").width(179.4);
        }else if($(window).width()<=942) {
            $("#logo").height(84.8);
            $("#logo").width(220.8);
            }else{
                $("#logo").height(106);
                $("#logo").width(276);
            }
            
    });
});
