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

  $('.add_in_basket .btn').click(function(e){
    e.preventDefault()
    $('.add_in_basket').addClass('add_in_basket-active')
    
    $(this).next('.add_message').fadeIn()
    $(this)
    
  })


  const counter = (selector, action) => {
    let price = selector.parents('.basket_counter').find($('.count_info'));
  
    switch (action) {
      case 'increment': 
        price.val(parseInt(price.val()) + 1); break;
      case 'decrement': 
        if (price.val() < 1) { price.val(0) } else { price.val(parseInt(price.val()) - 1);} break;  
    }
  } 
  
  $('.count_plus').click(function() {
  counter($(this), 'increment')
  })

  $('.count_minus').click(function() {
  counter($(this), 'decrement')
  })

      
  $('.basket_order_btn').click(function(e){
    e.preventDefault()
    $('.form_to_order').slideDown()
    $('.basket_order_btn').css("display","none")
    
  })

  // $('.basket_to_order_btn').click(function(){
  //   $('.modal_order_completed').fadeIn()
  // })

  // $('.form_to_order form button').click(function(){

  //   $('.modal_order_completed').fadeIn()


  // })





  $('.burger_button').click(function(){
    if ( !$('.burger_button').hasClass('burger-active') ){
      $('.burger_button').addClass('burger-active');
      $('.burger_button').next('.burger_menu').slideDown()
    }else{
      $('.burger_button').removeClass('burger-active');
      $('.burger_button').next('.burger_menu').slideUp()
    }
  })



  $('.request_call, .footer_info .btn, .burger_request_call').click(function(e){
    e.preventDefault()
    $('.order_callBack').fadeIn()
    $('.order_callBack_wrapper').fadeIn()
    $('html').css("overflow","hidden")
    
  })
  $('.order_callBack_wrapper .close_btn').click(function(){
    $('.order_callBack').fadeOut()
    $('.order_callBack_wrapper').fadeOut()
  })

  
  $('.order_callBack').click(function(){
    $('.order_callBack').fadeOut()
    $('.order_callBack_wrapper').fadeOut()
  })








  new Swiper('.stock_slider_container',{
    slidesPerView: 1,
    spaceBetween: 0,

    navigation: {
      nextEl: '#stock_next',
      prevEl: '#stock_prev',
    },

    pagination: {
      el: "#stock_pagination",
      clickable: true,
    },

    breakpoints:{
      700:{
        slidesPerView: 2,
      },
      1280:{
        slidesPerView: 3,
      }
    }
  })   





})