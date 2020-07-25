$(function(){
    $('.navbar .fa-toggle-off').click(function(){
        $('.fa-toggle-off').css("display","none");
        $('.fa-toggle-on').css("display","block");
        $("body").css({"backgroundColor": "#262626"});
        $('.paragraphs').css({"color": "white"});
        $('.heading').css({"color": "white"});
        $("img").css({"borderColor": "#262626"});
    });
    $('.navbar .fa-toggle-on').click(function(){
        $('.fa-toggle-on').css("display","none");
        $('.fa-toggle-off').css("display","block");
        $("body").css({"backgroundColor": "white"});
        $('.paragraphs').css({"color": "black"});
        $('.heading').css({"color": "black"});
        $("img").css({"borderColor": "white"});
    });
});