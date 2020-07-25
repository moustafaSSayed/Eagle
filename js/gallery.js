$(document).ready(function(){
   $(".gallery").fadeIn(2000);
  $(function(){ 
     //toggel dark mood button
   $('.navbar .fa-toggle-off').click(function(){
      
      $('.fa-toggle-off').css("display","none");
      $('.fa-toggle-on').css("display","block"); 
      $("body").css({"backgroundColor": "#808080"});
      $(".gallery,.filterbar button").css({"backgroundColor": "darkgray"});
      $("h2").css({"color": "white"});
      $(".text").css({"color": "white"});
      $(".navbar .logo h3").css({"color": "white"});  
      
   });
     
   $('.navbar .fa-toggle-on').click(function(){
      
      $('.fa-toggle-on').css("display","none");
      $('.fa-toggle-off').css("display","block");  
      $("body").css({"backgroundColor": "white"});
      $(".gallery,.filterbar button").css({"backgroundColor": "white"});
      $("h2").css({"color": "black"});
      $(".text").css({"color": "black"});
      $(".navbar .logo h3").css({"color": "white"});
      
   });
  });
  });