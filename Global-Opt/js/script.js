$(document).ready(function () {

	// ---------------------Scroll--------------------------
	$("a[href^='#']").click(function () {
		var _href = $(this).attr("href");
		$("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
		return false;
	});

	// ---------------------Toggle slide-------------------------

	function toggleSlide(item) {
		$(item).each(function (i) {
			$(this).on('click', function () {
				$('.prices__info').eq(i).toggleClass('prices__info_active');
				$('.prices__overlay').eq(i).toggleClass('prices__overlay_active');
			});
		});
	}

	toggleSlide('.button__prices');
	toggleSlide('.prices__overlay-back');

	// --------------Slider--------------

	$('.testimonials__slider').slick({
		centerMode: true,
		centerPadding: 0,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		prevArrow: '<button type="button" class="slick-prev"><img src="img/chevron-left-solid.svg" alt="arrow"></img></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="img/chevron-right-solid.svg" alt="arrow"></button>',
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 3,
				autoplay: true,
				autoplaySpeed: 3000,
				slidesToScroll: 1
			  }
			},
			{
			  breakpoint: 800,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				autoplay: true,
				autoplaySpeed: 3000,
				arrows: false
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				autoplay: true,
				autoplaySpeed: 3000,
			  }
			}
		]
	});

	if($(window).width() > 1200) {
		$(this).scroll(function () {
			if ($(this).scrollTop() > 1000) {
				$('.pageup').fadeIn();
			} else {
				$('.pageup').fadeOut();
			}
		});
	} else {
		$('.pageup').fadeOut();
	}
	

	// -----------------------Modal--------------------

	$('#call-btn, #calculating-btn, #footer__call-btn').on('click', function () {
		$('.overlay, #call-form').fadeIn('slow');
	});

	$('.modal__close').on('click', function () {
		$('.overlay, #call-form').fadeOut('slow');

	});

	new WOW().init();

	$('input[name=phone]').mask("+7 (999) 999-99-99");

// ------Mobile menu-------------

	$('.hamburger').on('click', function () {
		$(this).toggleClass('hamburger_active');
		$('.header__nav-list').toggleClass('header__nav-list_active');

		$('.header__nav-item a').each(function () {
			$(this).on('click', function () {
				$('.hamburger').removeClass('hamburger_active');
				$('.header__nav-list').removeClass('header__nav-list_active');
			});
		});
	});

});