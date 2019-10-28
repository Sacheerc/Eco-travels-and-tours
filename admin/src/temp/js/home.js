/* ---------------------------------------------- /*
 * Portfolio Filter
/* ---------------------------------------------- */
	var containerEl = document.querySelector('.portfolio-filter');
	var mixer = mixitup(containerEl);
/* ---------------------------------------------- /*
 * Portfolio Filter End
/* ---------------------------------------------- */


(function($){

	$(document).ready(function() {
		/* ---------------------------------------------- /*
		 * Header Scroll 
		/* ---------------------------------------------- */
		$('.header .navbar').onePageNav({
			currentClass: 'current',
			changeHash: false,
			scrollSpeed: 750
		});

		/* ---------------------------------------------- /*
		 * Home Banner Scroll 
		/* ---------------------------------------------- */
		$(".lets-talk").click(function() {
		    $('html,body').animate({
		        scrollTop: $("#contact").offset().top},
		        'slow');
		});

		/* ---------------------------------------------- /*
		 * Testimonial Slider
		/* ---------------------------------------------- */
		$('.testimonial-slider').owlCarousel({
		    loop:true,
		    margin:10,
		    nav:true,
		    items:1
		})

		/* ---------------------------------------------- /*
		 * Testimonial Slider
		/* ---------------------------------------------- */
		$('.testimonial-slider-01').owlCarousel({
			dots:true,
		    loop:true,
		    margin:10,
		    nav:false,
		    items:1
		})

	}); // Document Get Ready End here

	/* ---------------------------------------------- /*
	 * home Banner
	/* ---------------------------------------------- */
	$(".home-banner").height($(window).height());
	$(window).resize(function(){
		$(".home-banner").height($(window).height());
	});

})(jQuery);