$(document).ready(function () {


    // SLIDERS

    $('.slider-content').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }
        ]

    });
    $('.popup-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
    });



    //SCROLL

    $('.navigation ul li a').click(function () {
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({scrollTop: $(scroll_el).offset().top}, 700);
        }
        return false;
    });


});
