function dsk_top_menu_opacity_bg() {
    if ($(window).scrollTop() <= 40) {
        $('#dsk-top-menu').css('background', 'rgba(255,255,255,0)');
        $('#dsk-top-menu').css('box-shadow', 'none');
    }
    else {
        $('#dsk-top-menu').css('background', 'rgba(255,255,255,1)');
        $('#dsk-top-menu').css('box-shadow', 'rgba(0, 0, 0, 0.1) 0px 1px 3px');
        }
}
dsk_top_menu_opacity_bg();
$(window).scroll(function() {
  dsk_top_menu_opacity_bg();
});
