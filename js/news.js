$(document).ready(function(){

$(".right").fadeIn(1000);
    $(function(){ 
        //toggel dark mood button
      $('.navbar .fa-toggle-off').click(function(){
         
         $('.fa-toggle-off').css("display","none");
         $('.fa-toggle-on').css("display","block"); 
         $("body").css({"backgroundColor": "#808080"});
      $(".news,.filterbar button").css({"backgroundColor": "darkgray"});
      $(".right").css({"backgroundColor": "darkgray"});
      $("h1").css({"color": "white","textShadow":"2px 2px 8px black"});
      $("h4,p,ol").css({"color": "white"});
      $("h2").css({"color": "black"});
      $("h2").css({"backgroundColor": "#5437a6"});
      $(".navbar .logo h3").css({"color": "white"}); 
         
      });
        
      $('.navbar .fa-toggle-on').click(function(){
         
         $('.fa-toggle-on').css("display","none");
         $('.fa-toggle-off').css("display","block");
         $("body").css({"backgroundColor": "white"});
         $(".news, .filterbar .active").css({"backgroundColor": "whitesmoke"});
         $(".right").css({"backgroundColor": "whitesmoke"});
         $("h1").css({"color": "black","textShadow":"2px 2px 8px #2153AA"});
         $("h4,p,ol").css({"color": "black"});
         $("h2").css({"color": "white"});
         $("h2").css({"backgroundColor": "#2153AA"});
         $(".navbar .logo h3").css({"color": "white"});  
         
      });
    });
    
});
 
 
 
 
 
 
 
 
 
 
 
 
 
 

