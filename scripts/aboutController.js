(function(module) {
  var aboutController = {};

  aboutController.index = function(ctx) {
    $('main').children().hide();
    $('#about').show();
    $('#about-div').show();
  };

  module.aboutController = aboutController;
})(window);
