'use strict';

(function(module) {
  const controller = {};
  const $quoteArea = $('#quote-area');
  let previousQuote;

  $('#quote-button').on('click', () => {
    let randNumber = Math.floor(Math.random() * model.quotes.length);

    while (randNumber === previousQuote) {
      randNumber = Math.floor(Math.random() * model.quotes.length);
    }

    $quoteArea.first().empty().html(model.quotes[randNumber]);
    previousQuote = randNumber;
  });

  $('li').on('click', ':not(div)', function() {
    let clicked = $(this).data('content');

    $('section').hide();
    $(`#${clicked}`).fadeIn();
    // TODO need to fix issue with first click registering as click to stories
    console.log(clicked);
  })

  module.controller = controller;
})(window);