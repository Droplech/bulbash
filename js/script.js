$(document).ready(function(){

  $('.faq_title').click(function(){
    if( !$(this).hasClass('faq-active') ){
      $(this).addClass('faq-active')
      $(this).next('.faq_body').slideDown()
    }else{
      $(this).removeClass('faq-active')
      $(this).next('.faq_body').slideUp()
    }

  })

























 new Swiper('.stock_slider_container',{
    slidesPerView: 3,
    spaceBetween: 0,
    navigation: {
      nextEl: '#stock_next',
      prevEl: '#stock_prev',
    },
    pagination: {
      el: "#stock_pagination",
    },
 })   





})