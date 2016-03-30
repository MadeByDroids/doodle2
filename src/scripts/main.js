

jQuery(document).ready(function($) {
	// site preloader -- also uncomment the div in the header and the css style for #preloader
	$(window).load(function(){
		$('#preloader').fadeOut('slow',function(){$(this).remove();});
	});
});

// video controls
var vid = document.getElementById("bgvid");

// full screen handling
 $(document).ready(function() {
    $('.content').flexVerticalCenter({ cssAttribute: 'padding-top', verticalOffset: '0px' });
  });

$(window).on("resize load", resizeWindow);
	function resizeWindow( e ) {
		var newWindowHeight = $(window).height();
		$(".page").css("height", newWindowHeight );
		$('.content').flexVerticalCenter({ cssAttribute: 'padding-top', verticalOffset: '0px' });
		$(window).scroll(function() {
			if ($(this).scrollTop()>newWindowHeight)
			 {
				$('#bgvid').fadeOut().hide();
				vid.pause();
			 }
			else
			 {
			  $('#bgvid').show();
			  vid.play();
			 }
		 });
}


	new AnimOnScroll( document.getElementById( 'grid' ), {
		minDuration : 0.4,
		maxDuration : 0.7,
		viewportFactor : 0.2
	} );
