$(document).ready(function(){


	$('.burger__menu').on('click', function() {
		$('.burger__menu, .header__navbar, .navbar__cross').addClass('active');
	});

	$('.navbar__cross').on('click', function() {
		$('.burger__menu, .header__navbar, .navbar__cross').removeClass('active');
	});
	
    $('.contact-form__input').on('click', function() {
		$('.contact-form__input').removeClass('active__input');
	  $(this).addClass('active__input');
	});

	$('.inner__accordion__content__title').on('click', function() {
		$('.inner__accordion__content__title').not(this).removeClass('inner__accordion__active')
		  .not(this).next().removeClass('inner__accordion__active');
		$(this).toggleClass('inner__accordion__active');
		$(this).next().toggleClass('inner__accordion__active');
	});


    $('.slider').slick({
        dots: true,
        slidesToShow: 3,
        speed: 1000,
        responsive:[
			{
				breakpoint: 992,
				settings: {
					slidesToShow:2
				}
			},	
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
        
	});

	$('.slider2').slick({
        dots: true,
        slidesToShow: 4,
        speed: 1000,
        responsive:[
			{
				breakpoint: 992,
				settings: {
					slidesToShow:3
				}
			},	
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
        
	});

	$('.slider3').slick({
        dots: true,
        slidesToShow: 1,
		speed: 2000,
		autoplay: true,
        autoplaySpeed: 2000,
	});

	var wow = new WOW(
		{
		  offset: 150,          // расстояние в пикселях от нижнего края браузера до верхней границы элемента
		}
	  );

	wow.init();
	
	
});