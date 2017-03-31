$(function() {

	$(".js-featured__slider").bxSlider({
		hideControlOnEnd: true,
		minSlides: 1,
		maxSlides: 3,
		slideWidth: 360,
		slideMargin: 20,
		pager: false,
		infiniteLoop: false,
		nextText: "",
		prevText: "",
		nextSelector: ".featured-slider__next",
		prevSelector: ".featured-slider__prev",
	});
	$(".js-clients__slider").bxSlider({
		hideControlOnEnd: true,
		minSlides: 1,
		maxSlides: 6,
		slideWidth: 180,
		pager: false,
		infiniteLoop: false,
		nextText: "",
		prevText: "",
		nextSelector: ".clients-slider__next",
		prevSelector: ".clients-slider__prev"
	});
	$(".js-portfolio-slider").bxSlider({
		hideControlOnEnd: true,
		minSlides: 1,
		maxSlides: 4,
		slideWidth: 430,
		controls: false,
		// ticker: true,
		// speed: 25000
	});
	$(".js-article__slider").bxSlider({
		hideControlOnEnd: true,
		minSlides: 1,
		maxSlides: 3,
		slideWidth: 380,
		pager: false,
		infiniteLoop: false,
		nextText: "",
		prevText: "",
		nextSelector: ".article-slider__next",
		prevSelector: ".article-slider__prev"
	});
	//var mixer = mixitup('.js-portfolio-slider');
	$(".header-nav__toggle").click(function(){
		$(".header-nav").toggleClass("active");
	});
});
