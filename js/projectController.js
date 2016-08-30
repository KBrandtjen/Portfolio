(function(module) {
  var projectController = {};

  projectController.reveal = function() {
    $('#about').fadeOut();
    $('#projects').fadeIn();
  };

  module.projectController = projectController;
})(window);
