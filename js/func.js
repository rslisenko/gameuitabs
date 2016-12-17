;(function($){
	"use strict";

	var nav = $('.ba-game-nav');
	$('.game-tab').first().css('display', 'block');

	nav.on('click', 'a', function(){
		var links = $('a');

		links.removeClass('active');
		$(this).addClass('active');

		var blockID = $(this).attr('href');

		$('.game-tab').css('display', 'none');
		$(blockID).css('display', 'block');
	});

})(jQuery);
