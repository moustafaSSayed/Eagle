$(function(){ 
    $(".con").fadeIn(2000);
   //toggel dark mood button
 $('.navbar .fa-toggle-off').click(function(){
    
    $('.fa-toggle-off').css("display","none");
    $('.fa-toggle-on').css("display","block");  
    
 });
   
 $('.navbar .fa-toggle-on').click(function(){
    
    $('.fa-toggle-on').css("display","none");
    $('.fa-toggle-off').css("display","block");  
    
 });
    $('input[type=submit]').click(function(){
       
        alert('welcome ' + $('#firstname').val());
        
    });
});
