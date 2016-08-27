$(document).ready(function(){
    $(window).resize(function(){
        if ($(window).width()<=580) {
            $("#logo").height(53);
            $("#logo").width(138);
        }else if($(window).width()<=942) {
            $("#logo").height(74.2);
            $("#logo").width(193.2);
            }else{
                $("#logo").height(106);
                $("#logo").width(276);
            }
            
    });
});
