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