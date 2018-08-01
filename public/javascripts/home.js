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
        if($(".box").isInViewport()) {
            $(".box").css("background-position", "bottom right");
        }

        $('[data-toggle=collapse]').on("mouseenter", function (e) {
            var idName = $(this).attr("id").split(' ');
            $(".project-collapse-text").text($("." + idName).text());
        });

        $('[data-toggle=collapse]').on("mouseleave", function (e) {
            $(".project-collapse-text").text("");
        });

    });

    $( document ).scroll(function() {
        if ($(".pink-box").isInViewport()) {
            $(".pink-box").css("background-position", "right bottom");
        }
        if ($(".white-box").isInViewport()) {
            $(".white-box").css("background-position", "top left");
        }
        if($(".box").isInViewport()) {
            $(".box").css("background-position", "bottom right");
        }
    });
})(jQuery);

// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });