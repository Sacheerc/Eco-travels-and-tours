/* ---------------------------------------------- /*
 * Header Fixed
/* ---------------------------------------------- */
	$(window).scroll(function(){
	    if ($(window).scrollTop() >= 100) {
	       $('header').addClass('fixed-header');
	    }
	    else {
	       $('header').removeClass('fixed-header');
	    }
	});
/* ---------------------------------------------- /*
* Header End
/* ---------------------------------------------- */

(function($){

	 $(window).load(function() {
	   document.getElementById("loading").style.display = "none"; 
	});


	/* ---------------------------------------------- /*
	 * home Banner
	/* ---------------------------------------------- */
	$(".home-banner").height($(window).height());

	$(window).resize(function(){
		$(".home-banner").height($(window).height());
	});

})(jQuery);