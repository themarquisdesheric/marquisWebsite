'use strict';

(function(module) {
  const view = {};

  view.init = () => {
    $('section').hide();
    $('#quotes').fadeIn();
  }

  view.init();
  module.view = view;
})(window);