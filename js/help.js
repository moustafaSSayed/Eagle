$(function(){ 
    //toggel dark mood button
  $('.navbar .fa-toggle-off').click(function(){
     
      $('.fa-toggle-off').css("display","none");
      $('.fa-toggle-on').css("display","block");
      $("body").css({"backgroundColor": "#262626" , "color":"white"});
      $("h2,p").css({"color": "white"});
     
  });
    
  $('.navbar .fa-toggle-on').click(function(){
     
      $('.fa-toggle-on').css("display","none");
      $('.fa-toggle-off').css("display","block");
      $("body").css({"backgroundColor": "white"});
      $("h2,p").css({"color": "black"});
     
  });
});