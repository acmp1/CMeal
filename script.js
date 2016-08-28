var map;
function initMap(){
    map=new google.maps.Map(document.getElementById('map'),{
        center:{lat:-34.397,lng:150.644},
        zoom: 10
    });
    var infoWindow=new google.maps.InfoWindow({map: map});
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            var pos ={
                lat:position.coords.latitude,
                lng:position.coords.longitude
            };
            
            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
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
$(document).ready(function(){
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
