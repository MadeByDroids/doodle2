
// splash page fullscreener
 $(document).ready(function() {
   // $('.content').flexVerticalCenter({ cssAttribute: 'padding-top', verticalOffset: '-80px' });
  });

$(window).on("resize load", resizeWindow);
	function resizeWindow( e ) {
	var newWindowHeight = $(window).height();
	$(".page").css("height", newWindowHeight );
	
	//$('.content').flexVerticalCenter({ cssAttribute: 'padding-top', verticalOffset: '-80px' });


}

