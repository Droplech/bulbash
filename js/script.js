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

  $('.request_call').click(function(e){
    e.preventDefault()
    if ( !$(this).hasClass('request_call-active')){
      $(this).addClass('request_call-active')
      $('.order_callBack').slideDown()
    }else{
      $(this).removeClass('request_call-active')
      $('.order_callBack').slideUp()
    }
    
  })

  $('.burger_request_call').click(function(e){
    e.preventDefault()
    if ( !$(this).hasClass('burger_request_call-active')){
      $(this).addClass('burger_request_call-active')
      $(this).next().slideDown()
    }else{
      $(this).removeClass('burger_request_call-active')
      $(this).next().slideUp()
    }
    
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