$(function(){ 
    //toggel dark mood button
  $('.navbar .fa-toggle-off').click(function(){
     
     $('.fa-toggle-off').css("display","none");
     $('.fa-toggle-on').css("display","block");
     $(".form textarea").css({"backgroundColor": "#262626"});
     $(".form textarea").css({"color": "#f5f5f5"});
     $(".form input").css({"color": "#f5f5f5"});
     $(".form textarea").css({"border": "#262626"});
     $(".form input").css({"border": "#262626"});
     $(".form input").css({"background-color": "#262626"});
      $(".contacts h2").css({"color": "black"});
      $(".contacts p").css({"color": "black"});
      $(".info").css({"color": "black"});
      $(".info h2").css({"color": "black"});
      $(".info .a ").css({"color": "black"});
      $(".info .a ").css({"color": "black"});
  });
    
  $('.navbar .fa-toggle-on').click(function(){
     
     $('.fa-toggle-on').css("display","none");
     $('.fa-toggle-off').css("display","block");  
     $(".form textarea").css({"backgroundColor": "gainsboro"});
     $(".form textarea").css({"color": "black"});
     $(".form input").css({"color": "black"});
     $(".form textarea").css({"border": "gainsboro"});
     $(".form input").css({"border": "gainsboro"});
     $(".form input").css({"background-color": "gainsboro"});
      $(".contacts h2").css({"color": "white"});
      $(".contacts p").css({"color": "white"});
      $(".info").css({"color": "white"});
      $(".info h2").css({"color": "white"});
      $(".info .a ").css({"color": "white"});
      $(".info .a ").css({"color": "white"});
  });
});