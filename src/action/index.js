$(document).ready(function() {
    const tooltipElements = $('[data-bs-toggle="tooltip"')
    const mapTooltip = [...tooltipElements].map(btn => new bootstrap.Tooltip(btn, {customClass:'edit-tooltip'}));

    $("#carousel-category").slick({
        prevArrow: $(".slick-prev"),
        nextArrow: $(".slick-next"),
        slidesToScroll: 1,
        infinite:false,
        variableWidth: true,
        swipeToSlide:true
    })
})