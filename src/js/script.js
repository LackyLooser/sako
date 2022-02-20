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
  $('.carousel__inner').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    prevArrow: '<span type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></span>',
    nextArrow: '<span type="button" class="slick-next"><i class="fas fa-chevron-right"></i></span>'
  })
  $('.carousel_main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    
    dots: true,
    prevArrow: '<span type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></span>',
    nextArrow: '<span type="button" class="slick-next"><i class="fas fa-chevron-right"></i></span>'
  })
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
// =============================================
// $(document).ready(function(){
//   $('.carousel').carousel({
//     interval: 2000
//   })
// });