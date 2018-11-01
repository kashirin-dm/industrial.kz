// Slick slider for Cart product images
$(function() {
    $('.slider-for').slick({
     slidesToShow: 1,
     slidesToScroll: 1,
     arrows: false,
     fade: true,
     lazyLoad: 'ondemand',
     asNavFor: '.slider-nav'
   });
   $('.slider-nav').slick({
     slidesToShow: 6,
     slidesToScroll: 1,
     lazyLoad: 'ondemand',
     asNavFor: '.slider-for',
     dots: true,
     centerMode: true,
     focusOnSelect: true
   });
});
