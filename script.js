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
    }
    function handleLocationError(browserHasGeolocation,infoWindow,pos){
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                                'Error: The Geolocation service failed.':
                                'Error: Your browser doesn\'t support geolocation');
        }
google.maps.event.addDomListener(window, 'load', initMap);
var Usuario = function(nombre,password,tarjeta,correo)
{
    this.nombre=nombre;
    this.password=password;
    this.tarjeta=tarjeta;
    this.correo=correo;
}
var arrUsuario=[];
var ContaUsuario=0;
$(document).ready(function(){
    var nombre="0",password="0",tarjeta="0",correo="0",passwordConfir="0";
    $("#bRegistrar").click(function(){
        nombre=$('input[name=nUsuario]').val();
        password=$('input[name=Contraseña]').val();
        passwordConfir=$('input[name=Confirmacion]').val();
        tarjeta=$('input[name=tarjeta]').val();
        correo=$('input[name=correo]').val();
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
