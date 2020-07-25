$(function(){ 
    //toggel dark mood button
  $('.navbar .fa-toggle-off').click(function(){
     
      $('.fa-toggle-off').css("display","none");
      $('.fa-toggle-on').css("display","block");  
      $("body").css({"backgroundColor": "#808080"});
      $("h4,.reviews h2").css({"color": "white"});
      $("p").css({"color": "#02176A"});
  });
    
  $('.navbar .fa-toggle-on').click(function(){
     
      $('.fa-toggle-on').css("display","none");
      $('.fa-toggle-off').css("display","block");
      $("body").css({"backgroundColor": "white"});
      $("h4,.reviews h2").css({"color": "black"});
      $("p").css({"color": "#4682B4"});
     
  });
});