(function($){	

	 /* ---------------------------------------------- /*
	 * Skill Bar
	/* ---------------------------------------------- */
	var skillsDiv = $('.skills-box');
	$(window).on('scroll', function() {
		var winT = $(window).scrollTop(),
		winH = $(window).height(),
		skillsT = skillsDiv.offset().top;
		if (winT + winH > skillsT) {
			$('.skillbar').skillBars({
				from: 0,
				speed: 4000, 
				interval: 100,
				decimals: 0,
			});
		}
	});

})(jQuery);