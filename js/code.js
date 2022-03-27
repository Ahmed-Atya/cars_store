/*global $, document*/
$(document).ready(function () {
    'use strict';

    // Trigger Mixitup Plugin
	$('#portfolio').mixItUp();

  // Trigger Auto Slider
    (function autoSlider() {
        $('.testim.active').each(function () {
            var glopbalThis = $(this);
            if (!$(glopbalThis).is(':last-child')) {

                $(glopbalThis).delay(3000).fadeOut(1000, function () {

                    $(glopbalThis).removeClass('active').next().addClass('active').fadeIn();
                    autoSlider();

                });
            } else {

                $(glopbalThis).delay(3000).fadeOut(1000, function () {

                    $(glopbalThis).removeClass('active');
                    $('.testim').eq(0).addClass('active').fadeIn();
                    autoSlider();

                });

            }

        });



    }());
//triggre niceScroll Plugin
$("body").niceScroll({
    cursorcolor: "rgb(153, 0, 12)",
    cursorwidth: "16px"
});
});
