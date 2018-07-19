$(document).ready(function() {
    $('.product-slick').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        arrows: false,
        dots: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.guide-slick').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 500,
        arrows: false,
        dots: true,
        variableWidth: true,
        infinite: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

});