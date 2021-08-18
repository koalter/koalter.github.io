var currentIndex = 0;

function cycleItems() {
  var items = $('.item').eq(currentIndex);
  $('.item').hide();
  items.fadeIn(1000);
}

function cycleButtons() {
  var items = $('.button').eq(currentIndex);
  if ($('.button').hasClass('active')) {
    $('.button').removeClass('active');
  };
  items.addClass('active');
}

var autoSlide = setInterval(function() {
  currentIndex += 1;
  if (currentIndex > $('.item').length - 1) {
    currentIndex = 0;
  }
  cycleItems();
  cycleButtons();
}, 5000);

$('.button').click(function() {
  clearInterval(autoSlide);
  currentIndex = $('.button').index(this);
  if ($('.button').hasClass('active')) {
    $('.button').removeClass('active');
  };
  $(this).addClass('active');
  cycleItems();
  autoSlide = setInterval(function() {
  currentIndex += 1;
  if (currentIndex > $('.item').length - 1) {
    currentIndex = 0;
  }
  cycleItems();
  cycleButtons();
}, 5000);
});
