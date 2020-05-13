$(document).ready(function(){
  // -------------Slider------------

    $('.carousel__inner').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><span class="icon-angle-left"></span></button>',
        nextArrow: '<button type="button" class="slick-next"><span class="icon-angle-right"></span></button>',
        responsive: [
          {
            breakpoint: 950,
            settings: {
              dots: true,
              arrows: false,   
            }
          },
        ]
    });
    $('.slick-dots li button').html('');

    // -------------------Tabs---------------------

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab-item_active)', function() {
      $(this)
        .addClass('catalog__tab-item_active').siblings().removeClass('catalog__tab-item_active')
        .closest('section.catalog').find('ul.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    // ------------------------Card slide------------

    function toggleSlide(item) {
      $(item).each(function(i) {
        $(this).on('click', function(e) {
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        });
      });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    // ---------------Modal-----------------------

    $('[data-modal=consultation]').on('click', function() {
      $('.overlay, #consultation').fadeIn('slow');
  });

    $('.modal__close').on('click', function() {
     $('.overlay, #consultation, #thanks, #order').fadeOut('slow');

  });


  $('.button__mini').each(function(i) {
    $(this).on('click', function() {
      $('#order .modal__desc').text($('.catalog-item__title').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    });
  });

  
  $('input[name=phone]').mask("+7 (999) 999-99-99");

// -------------- Arrow top------------

  $(window).scroll(function() {
    if($(this).scrollTop() > 1000) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });


  $("a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });

  new WOW().init();
})