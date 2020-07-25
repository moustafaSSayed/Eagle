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
      $("body").css({"backgroundColor": "#262626"});
      $('.login-form').css("backgroundColor","#AAA");
      $("h1").css({"color": "white"});
      $("label").css({"color": "white"});
      $('.login-button').css({"color": "white"});
      });
    
  $('.navbar .fa-toggle-on').click(function(){
     
      $('.fa-toggle-on').css("display","none");
      $('.fa-toggle-off').css("display","block");
      $("body").css({"backgroundColor": "white"});
      $('.login-form').css("backgroundColor","#EEE");
      $("h1").css({"color": "black"});
      $("label").css({"color": "black"});
      $('.login-button').css({"color": "black"});
  });
});