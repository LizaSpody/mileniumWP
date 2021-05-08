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
            wowInit();

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

    function wowInit() {
        var wow = new WOW(
            {
                //     boxClass:     'wow',      // animated element css class (default is wow)
                //     animateClass: 'animated', // animation css class (default is animated)
                // offset:       -20,          // distance to the element when triggering the animation (default is 0)
                //     mobile:       true,       // trigger animations on mobile devices (default is true)
                //     live:         true,       // act on asynchronously loaded content (default is true)
                //     callback:     function(box) {
                //         // the callback is fired every time an animation is started
                //         // the argument that is passed in is the DOM node being animated
                //     },
                //     scrollContainer: null,    // optional scroll container selector, otherwise use window,
                //     resetAnimation: true,     // reset animation on end (default is true)
            }
        );
        wow.init();
    }


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
var $=jQuery.noConflict();
$(document).ready(function(){
    $('.slider_nav').slick({
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
    $('.slider_list').slick({
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
});