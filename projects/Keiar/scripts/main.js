$(document).ready(function()
{
	// START SLIDER
	let currentIndex = 0;

	function cycleItems() {
		let items = $('.item').eq(currentIndex);
		$('.item').hide();
		items.fadeIn(1000);
	}

	function cycleButtons() {
		let items = $('.button').eq(currentIndex);
		if ($('.button').hasClass('active')) 
		{
			$('.button').removeClass('active');
		};
		items.addClass('active');
	}

	function startSlide() 
	{
		currentIndex += 1;
		if (currentIndex > $('.item').length - 1) 
		{
			currentIndex = 0;
		}
		cycleItems();
		cycleButtons();
	}

	let autoSlide = setInterval(startSlide, 5000);

	$('.button').click(function() 
	{
		clearInterval(autoSlide);
		currentIndex = $('.button').index(this);
		if ($('.button').hasClass('active')) 
		{
			$('.button').removeClass('active');
		};
		$(this).addClass('active');
		cycleItems();
		autoSlide = setInterval(startSlide, 5000);
	});
	//END SLIDER

	
});