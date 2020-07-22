$(document).ready(function(){

$(".right").fadeIn(1000);
    $(function(){ 
        //toggel dark mood button
      $('.navbar .fa-toggle-off').click(function(){
         
         $('.fa-toggle-off').css("display","none");
         $('.fa-toggle-on').css("display","block");  
         
      });
        
      $('.navbar .fa-toggle-on').click(function(){
         
         $('.fa-toggle-on').css("display","none");
         $('.fa-toggle-off').css("display","block");  
         
      });
    });
    
});
 
 
 
 
 
 
 
 
 
 
 
 
 
 

