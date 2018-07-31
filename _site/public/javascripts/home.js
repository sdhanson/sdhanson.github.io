$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

jQuery(function($) {
    $( document ).ready(function() {
        if ($(".pink-box").isInViewport()) {
            $(".pink-box").css("background-position", "right bottom");
        }
        if ($(".white-box").isInViewport()) {
            $(".white-box").css("background-position", "top left");
        }
    });
})(jQuery);