(function(module) {
  var startController = {};

  startController.index = function() {
    $('main').children().hide();
  };

  module.startController = startController;
})(window);
