$(function () {
    $('.slider').slick({
        vertical: false,
        verticalSwiping: true,
        slidesToShow: 1,
        autoplay: false,
        dots: true,
        arrows: false,
        appendDots: $('.slick-slider-dots'),
        customPaging: function (slider, i) {
            return '<span class="pagination_dot">' + $(slider.$slides[i]).attr('title') + '</span>';
        }
    })
})
