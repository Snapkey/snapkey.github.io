(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 100
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 50
        }
    });

        // Vars.
            var $form = document.querySelectorAll('#signup-form')[0],
                $submit = document.querySelectorAll('#signup-form input[type="submit"]')[0],
                $message;

        // Bail if addEventListener isn't supported.
            if (!('addEventListener' in $form))
                return;

        // Message.
            $message = document.createElement('span');
                $message.classList.add('message');
                $form.appendChild($message);

            $message._show = function(type, text) {

                $message.innerHTML = text;
                $message.classList.add(type);
                $message.classList.add('visible');

                window.setTimeout(function() {
                    $message._hide();
                }, 3000);

            };

            $message._hide = function() {
                $message.classList.remove('visible');
            };

        // Events.
        // Note: If you're *not* using AJAX, get rid of this event listener.
            $form.addEventListener('submit', function(event) {

                // Hide message.
                    $message._hide();

                // Disable submit.
                    $submit.disabled = true;

                // Process form.
                    window.setTimeout(function() {

                        // Reset form.
                            $form.reset();

                        // Enable submit.
                            $submit.disabled = false;

                        // Show message.
                            $message._show('success', '<strong>Thank you!</strong>');
                            //$message._show('failure', 'Something went wrong. Please try again.');

                    }, 750);

            });

})(jQuery); // End of use strict
