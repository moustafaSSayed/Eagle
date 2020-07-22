$(document).ready(function(){
$(".login-form").animate({
      top:'15%',
      left: '32.5%',
      height: '400px',
      width: '500px'
  },1500);});
$(document).ready(function(){
    $(".login-button").click(function(){
        alert("Hello "+$(".name").val());
    }); 
});

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