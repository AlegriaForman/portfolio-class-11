(function(module) {
  var skillsController = {};

  skillsController.index = function(ctx) {
    Pics.fetchSkillsPics(contentView.initPortfolio);
    $('#skills-div').empty();
    $('main').children().hide();
    $('#skills').show();
    $('#skills-div').show();
  };

  module.skillsController = skillsController;
})(window);
