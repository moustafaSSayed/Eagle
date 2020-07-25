$(function(){
    $('.navbar .fa-toggle-off').click(function(){
        $('.fa-toggle-off').css("display","none");
        $('.fa-toggle-on').css("display","block");
        $("body").css({"backgroundColor": "#262626"});
        $("h1").css({"color": "white"});
        $("p").css({"color": "white"});
        $("div").css({"color": "white"});
        $('.comments').css({"color": "white"});
        
    });
    $('.navbar .fa-toggle-on').click(function(){
        $('.fa-toggle-on').css("display","none");
        $('.fa-toggle-off').css("display","block");
        $("body").css({"backgroundColor": "white"});
        $("h1").css({"color": "black"});
        $("p").css({"color": "black"});
        $("div").css({"color": "black"});
        $('.comments').css({"color": "white"});
        $(".hhh").css({"color": "white"});
    });
});