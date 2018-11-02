/*=========================================
 * animatedModal.js: Version 1.0
 * author: João Pereira
 * website: http://www.joaopereira.pt
 * email: joaopereirawd@gmail.com
 * Licensed MIT
=========================================*/
(function ($) {

    $.fn.animatedModal = function(options) {
        var modal = $(this);

        //Defaults
        var settings = $.extend({
            modalTarget:'contact-form',
            position:'fixed',
            width:'100%',
            height:'100%',
            top:'0px',
            left:'0px',
            zIndexIn: '9999',
            zIndexOut: '-9999',
            color: '#1d73bf',
            opacityIn:'1',
            opacityOut:'0',
            animatedIn:'bounceInUp',
            animatedOut:'bounceOutDown',
            animationDuration:'.5s',
            overflow:'visible',
            // Callbacks
            beforeOpen: function() {},
            afterOpen: function() {},
            beforeClose: function() {},
            afterClose: function() {}



        }, options);

        var closeBt = $('.close-'+settings.modalTarget);

        //console.log(closeBt)

        var href = $(modal).attr('href'),
            id = $('body').find('#'+settings.modalTarget),
            idConc = '#'+id.attr('id');
            //console.log(idConc);
            // Default Classes
            id.addClass('animated');
            id.addClass(settings.modalTarget+'-off');

        //Init styles
        var initStyles = {
            'position':settings.position,
            'width':settings.width,
            'height':settings.height,
            'top':settings.top,
            'left':settings.left,
            'background-color':settings.color,
            'overflow-y':settings.overflow,
            'z-index':settings.zIndexOut,
            'opacity':settings.opacityOut,
            '-webkit-animation-duration':settings.animationDuration,
            '-moz-animation-duration':settings.animationDuration,
            '-ms-animation-duration':settings.animationDuration,
            'animation-duration':settings.animationDuration
        };
        //Apply stles
        id.css(initStyles);

        modal.click(function(event) {
            event.preventDefault();
            if (href == idConc) {
                if (id.hasClass(settings.modalTarget+'-off')) {
                    id.removeClass(settings.animatedOut);
                    id.removeClass(settings.modalTarget+'-off');
                    id.addClass(settings.modalTarget+'-on');
                }

                 if (id.hasClass(settings.modalTarget+'-on')) {
                    settings.beforeOpen();
                    $(document).on('keyup', closeListener)

                    id.css({'opacity':settings.opacityIn,'z-index':settings.zIndexIn});
                    id.addClass(settings.animatedIn);
                    id.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', afterOpen);
                };
            }
        });


        function closeListener(event) {
            event.preventDefault();

            /*
             * if the event type is keyup and the escape key is not pressed,
             * we don't close the modal
             */
            if (event.type === 'keyup' && event.keyCode !== 27) {
                return
            }

            settings.beforeClose(); //beforeClose
            $(document).off('keyup', closeListener)

            if (id.hasClass(settings.modalTarget+'-on')) {
                id.removeClass(settings.modalTarget+'-on');
                id.addClass(settings.modalTarget+'-off');
            }

            if (id.hasClass(settings.modalTarget+'-off')) {
                id.removeClass(settings.animatedIn);
                id.addClass(settings.animatedOut);
                id.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', afterClose);
            };
        }

        closeBt.click(closeListener);

        function afterClose () {
            id.css({'z-index':settings.zIndexOut});
            settings.afterClose(); //afterClose
        }

        function afterOpen () {
            settings.afterOpen(); //afterOpen
        }

    }; // End animatedModal.js

}(jQuery));

// Activation Contact Form
$(".form-toggler").animatedModal();
