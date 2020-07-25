$(function(){ 
    //toggel dark mood button
  $('.navbar .fa-toggle-off').click(function(){
     
     $('.fa-toggle-off').css("display","none");
     $('.fa-toggle-on').css("display","block"); 
     $(".table").css({"backgroundColor": "#262626"});
     $("input").css({"backgroundColor": "#262626"});
     $("input").css({"color": "white"});
  });
    
  $('.navbar .fa-toggle-on').click(function(){
     
     $('.fa-toggle-on').css("display","none");
     $('.fa-toggle-off').css("display","block"); 
     $(".table").css({"backgroundColor": "#f5f5f5"});
     $("input").css({"backgroundColor": "#f5f5f5"});
     $("input").css({"color": "black"});
     
  });
    //set rondom price
    $('.date').focusout(function(){
        
         $(".price").html(function(){
             
             return Math.floor(Math.random() *100) * 10 +100 + "$"
         });
        
        
    });
    
});

