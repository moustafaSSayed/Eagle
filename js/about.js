$(function(){ 
    //toggel dark mood button
  $('.navbar .fa-toggle-off').click(function(){
     
      $('.fa-toggle-off').css("display","none");
      $('.fa-toggle-on').css("display","block");
      $("body").css({"backgroundColor": "#808080","color":"white"});
      
  });
    //$("").css({"": "", "" : ""});
    
  $('.navbar .fa-toggle-on').click(function(){
     
      $('.fa-toggle-on').css("display","none");
      $('.fa-toggle-off').css("display","block");
      $("body").css({"backgroundColor": "white","color":"black"});
     
  });
});