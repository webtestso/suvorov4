$(document).ready(function(){
	$(window).scroll(function(){
  	var light_pos = $('#portfolio').offset().top;
    var light_height = $('#portfolio').height();
    var menu_pos = $('#mainNav .navbar-nav .nav-item .nav-link').offset().top;
    var menu_height = $('#mainNav .navbar-nav .nav-item .nav-link').height();
    var scroll = $(window).scrollTop();
    console.log('light',light_pos);
    console.log('menu',menu_pos);
    console.log('scroll',scroll);

    if(menu_pos > light_pos && menu_pos < (light_pos + light_height)) {
    	$('#mainNav .navbar-nav .nav-item .nav-link').addClass('menu_black');
      $('#mainNav .navbar-nav .nav-item .nav-link').removeClass('menu_white');
    }
    else {
    	$('#mainNav .navbar-nav .nav-item .nav-link').removeClass('menu_black');
      $('#mainNav .navbar-nav .nav-item .nav-link').addClass('menu_white');
    }

  })
})
