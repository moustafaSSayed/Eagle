$(function(){ 
    //toggel another theme button
  $('.navbar .fa-toggle-off').click(function(){
     
     $('.fa-toggle-off').css("display","none");
     $('.fa-toggle-on').css("display","block");  
     
  });
    
  $('.navbar .fa-toggle-on').click(function(){
     
     $('.fa-toggle-on').css("display","none");
     $('.fa-toggle-off').css("display","block");  
     
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