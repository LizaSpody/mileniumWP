import WOW from "wowjs/dist/wow.min.js";
import 'jquery'
/* eslint-disable */
(function ($) {

	/*-------------------------------------
	 Menu
	 -------------------------------------*/
	var humburger = $('.humburger');
	var menu = $('.menu');
	var header = $('header');

	humburger.on('click', function () {
		menu.toggleClass('active')
		$(this).toggleClass('close');
		header.toggleClass('fixed');
	});

	// closeMenu.on('click', function () {
	//     $('.menu_hidden').removeClass('open')
	// });


	/*-------------------------------------
	 Preloader
	 -------------------------------------*/
	$(window).on('load', function () {
		var preloader = $('.loader');
		if (preloader.length) {
			preloader.delay(600).fadeOut('slow');
			new WOW.WOW().init();

			if ($('.split').length) {
				setTimeout(function () {
					$('.topic_title__top').addClass('active');
				}, 1000);
				setTimeout(function () {
					$('.topic_title__down').addClass('active');
				}, 2000);
				setTimeout(function () {
					$('.topic_title_text').addClass('active');
				}, 3000);
			}
		}
	});

	/*-------------------------------------
	 Wow
	 -------------------------------------*/


	/*-------------------------------------
	 Text Split
	 -------------------------------------*/


	function textSplit(target) {
		target.children().andSelf().contents().each(function () {
			if (this.nodeType == 3) {
				$(this).replaceWith($(this).text().replace(/(\w)/g, "<span>$&</span>"));
			}
		});
	}

	$(function () {
		textSplit($('.split'));
	});

})(jQuery);
var $ = jQuery.noConflict();
(function() {
	$(document).ready(function(){
		new WOW.WOW().init();
		jQuery('.slider_nav').not('.slick-initialized').slick({
			arrows: true,
			vertical: true,
			dots: false,
			slidesToShow: 5,
			slidesToScroll: 1,
			nextArrow: '<button type="button" class="slick-next"><i class="icon-chevrons-right"></i>  </button>',
			prevArrow: '<button type="button" class="slick-prev"> <i class="icon-chevrons-right"></i>  </button>',
			focusOnSelect: true,
			asNavFor: '.slider_list',
		});
		jQuery('.slider_list').not('.slick-initialized').slick({
			asNavFor: '.slider_nav',
			arrows: false,
			vertical: true,
			dots: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						nextArrow: '<button type="button" class="slick-next"><i class="icon-chevrons-right"></i>  </button>',
						prevArrow: '<button type="button" class="slick-prev"> <i class="icon-chevrons-right"></i>  </button>',
						arrows: true,
					},
				},
				{
					breakpoint: 768,
					settings: {
						vertical: false,
						arrows: true,
						nextArrow: '<button type="button" class="slick-next">Next<i class="icon-chevrons-right"></i>  </button>',
						prevArrow: '<button type="button" class="slick-prev"><i class="icon-chevrons-right"></i> Back </button>',
						swipe: false,
						fade: true,
					},
				},
			],
		});
		jQuery('.feedback_slider').not('.slick-initialized').slick({
			infinite: true,
			slidesToShow: 2,
			slidesToScroll: 1,
			nextArrow: '<button type="button" class="slick-next"> Next </button>',
			prevArrow: '<button type="button" class="slick-prev"> Back </button>',
			responsive: [
				{
					breakpoint: 575,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true,
						dots: true,
					},
				},{
					breakpoint: 769,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						infinite: true,
						dots: true,
					},
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true,
						dots: true,
					},
				}],
		});
	});
})(jQuery)

