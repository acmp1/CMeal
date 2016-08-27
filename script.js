$(document).ready(function(){
    $(window).resize(function(){
        if ($(window).width() <= 800) {
            $("#imagen").height(84.8);
            $("#imagen").width(220.8);
        }
    });
});
