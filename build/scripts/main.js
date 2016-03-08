

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

// masonry
$( function() {

  var $container = $('#container').masonry({
    itemSelector: '.item',
    columnWidth: 250,
    isFitWidth: true
  });

  $('#load-images').click( function showPics() {
    var $items = getItems();
    // hide by default
    $items.hide();
    // append to container
    $container.append( $items );
    $items.imagesLoaded().progress( function( imgLoad, image ) {
      // get item
      // image is imagesLoaded class, not <img>
      // <img> is image.img
      var $item = $( image.img ).parents('.item');
      // un-hide item
      $item.show();
      // masonry does its thing
      $container.masonry( 'appended', $item );
    });
  });
  
});

function randomInt( min, max ) {
  return Math.floor( Math.random() * max + min );
}

function getItem() {
 var width = randomInt( 300, 800 );  
 var height = randomInt( 300, 500 );
   // var width = 100
  //var height = 100
  var item = '<div class="item"><button class="js-button btn btn-secondary-outline center-block" data-toggle="modal" data-target="#modalPicture" type="button" value="Expand photo" role="button">Expand photo</button>'+'<img src="http://lorempixel.com/' +  width + '/' + height + '/nature" /></div>';
  return item;
}

function getItems() {
  var items = '';
  for ( var i=0; i < 12; i++ ) {
    items += getItem();
  }
  // return jQuery object
  return $( items );
}

// click image functionality
$(document).on("click", ".js-button", function() {
    var imageSrc = $(this).parents(".item").find("img").attr("src");
    $(".js-download").attr("href", imageSrc);
    $(".js-modal-image").attr("src", imageSrc);
    $(document).on("click", ".js-heart", function() {
      $(this).toggleClass("active");
    });
  });


