$(function(){ 
    //toggel another theme button
  $('.navbar .fa-toggle-off').click(function(){
     
      $('.fa-toggle-off').css("display","none");
      $('.fa-toggle-on').css("display","block");
      $("body").css({"backgroundColor": "#808080"});
      $(".opinions").css({"color": "white"});
      $(".stickybar").css({"backgroundColor": "black"});
      $(".gallery").css({"backgroundColor": "#0f4260"});
      $(".advices,hr").css({"color": "white"});
      $(".opinions .card").css({"border": "2px solid white"});
      $(".advices .one").css({"border": "2px solid white"});
      $(".fa-arrow-circle-o-up").css({"color": "white"});
      $(".reviews").css({"color": "black"});
     
  });
    //$("").css({"": "", "" : ""});
    
  $('.navbar .fa-toggle-on').click(function(){
     
      $('.fa-toggle-on').css("display","none");
      $('.fa-toggle-off').css("display","block");
      $("body").css({"backgroundColor": "white"});
      $(".countries .filterbar .active").css({"color": "black"});
      $(".opinions").css({"color": "black"});
      $(".stickybar").css({"backgroundColor": "#5886c8"});
      $(".gallery").css({"backgroundColor": "#5384a0"});
      $(".advices,hr").css({"color": "black"});
      $(".opinions .card").css({"border": "2px solid gray"});
      $(".advices .one").css({"border": "2px solid black"});
      $(".fa-arrow-circle-o-up").css({"color": "slategray"});
      $(".reviews").css({"color": "black"});
     
  });
    // call bxSlider
  $(document).ready(function(){
    $('.slider').bxSlider({
     speed:1000
     
        });
   });
// my slider
    
    $(function my_slider(){
        $('.my-slider .active').each(function(){
           if(!$(this).is(':last-child')){
             
               $(this).delay(3000).fadeOut(1000,function(){
                  
                   $(this).removeClass('active').next().addClass('active').fadeIn();
                   
                   my_slider();
                   
               });
               
           }
            else{
                $(this).delay(3000).fadeOut(1000,function(){
                   
                    $(this).removeClass('active');
                    $('.my-slider div').eq(0).addClass('active').fadeIn();
                    my_slider();
                });
                
            }
            
        });
        
    });
    
// smoth scroll
    
    $('.stickybar li a,.fa-arrow-circle-o-up').click(function(){
        
       $('html,body').animate({
           
           scrollTop: $('#' + $(this).data('value')).offset().top-50
            
       },1000);
        
    });

    
});