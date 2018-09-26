// Rerun the polyfill on all elements with the data attribute
objectFitPolyfill();


// Add animation classes to main modules
const $modules = $('.bio, .work, .accent');
$modules.each((index, elem)=> {
  $(elem).waypoint({
    handler(direction) {
      if (direction === 'down') {
        $(elem).addClass('js-animate');
      }
    },
    offset: '25%'
  });
});

// Main navigation: Reduce size when past hero. Increase size when in hero
$('.bio').waypoint({
  handler(direction) {
    if (direction === 'down') {
      $('.accent').addClass('js-content');
    } else {
      $('.accent').removeClass('js-content');
    }
  },
  offset: '0%'
});