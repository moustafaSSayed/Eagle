$(function(){ 
    //toggel dark mood button
  $('.navbar .fa-toggle-off').click(function(){
     
     $('.fa-toggle-off').css("display","none");
     $('.fa-toggle-on').css("display","block");  
     $("body").css({"backgroundColor": "#262626"});
     $(".tips").css({"background-color": "slategrey"});
     $(".tips").css({"border":"black"});
     $(".entry-title").css({"color":"white"});
     $(".p").css({"color":"white"});
     $(".h3").css({"color":"white"});
  });
    
  $('.navbar .fa-toggle-on').click(function(){
     
     $('.fa-toggle-on').css("display","none");
     $('.fa-toggle-off').css("display","block"); 
     $("body").css({"backgroundColor": "#f5f5f5"});
     $(".tips").css({"background-color":"white"});
     $(".tips").css({"border":"#f5f5f5"});
     $(".entry-title").css({"color":"black"});
     $(".p").css({"color":"black"});
     $(".h3").css({"color":"black"});
     
  });
});