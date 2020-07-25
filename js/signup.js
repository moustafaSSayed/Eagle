$(function(){ 
    $(".con").fadeIn(2000);
   //toggel dark mood button
 $('.navbar .fa-toggle-off').click(function(){
    
    $('.fa-toggle-off').css("display","none");
    $('.fa-toggle-on').css("display","block");  $("body").css({"backgroundColor": "#808080"});
    $(".con ,.filterbar button").css({"backgroundColor": "#696666"});
    $(".b").css({"backgroundColor": "#d4cdcd"});
    $("p,.welcome,.b").css({"color": "white"});
    $("label,fieldset").css({"color": "white"});

    
 });
   
 $('.navbar .fa-toggle-on').click(function(){
    
    $('.fa-toggle-on').css("display","none");
    $('.fa-toggle-off').css("display","block");  
    $("body").css({"backgroundColor": "white"});
    $(".con, .filterbar, .active").css({"backgroundColor": "#F5F1F1"});
    $(".b").css({"backgroundColor": "snow"});
    $("p,.welcome,.b").css({"color": "black"});
    $("label,fieldset").css({"color": "black"});
    $(".navbar .logo h3").css({"color": "white"});
    
 });
    $('input[type=submit]').click(function(){
       
        alert('welcome ' + $('#firstname').val());
        
    });
});
