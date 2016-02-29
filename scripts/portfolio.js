(function(module){
  contentView = {};
  contentView.initPortfolio = function(ctx){
    Pics.skillsPicture.forEach(function(a){
      $('#skills-div').append(a.skillsPics());
    });
  };

})(window);
