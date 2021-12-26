$(function () {
    $('.slider').slick({
        vertical: false,
        verticalSwiping: false,
        slidesToShow: 1,
        infinite: false,
        autoplay: false,
        dots: true,
        arrows: false,
        appendDots: $('.slick-slider-dots'),
        customPaging: function (slider, i) {
            return '<span class="pagination_dot">' + $(slider.$slides[i]).attr('title') + '</span>';
        }
    })
})
