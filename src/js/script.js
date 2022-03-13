// Прокрутка в начало страницы ==============
$(document).ready(function(){
    $(function (){    
    $("#back-top").hide();
  
    $(window).scroll(function (){
      if ($(this).scrollTop() > 500){
        $("#back-top").fadeIn();
      } else{
        $("#back-top").fadeOut();
      }
    });
    
    $("#back-top a").click(function (){
      $("body,html").animate({
        scrollTop:0
      }, 800);
      return false;
    });
  });
  $('#clickNew').on('click',function(e) {
    if (!$(this).hasClass("no-jump")) {
      $('html, body').stop().animate({
        scrollTop: $('#new').offset().top
      },777);
      e.preventDefault();
      return false;
    }
  });     
});