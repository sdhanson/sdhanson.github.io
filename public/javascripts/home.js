$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

alert("here");

jQuery(function($) {
    $( document ).ready(function() {
        alert("hello");
        if ($(".pink-box").isInViewport()) {
            $(".pink-box").velocity( { width: "70%" }, 1000);
        }
    });
})(jQuery);