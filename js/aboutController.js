(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {
    $('#projects').fadeOut();
    $('#about').fadeIn();
  };

  module.aboutController = aboutController;
})(window);
