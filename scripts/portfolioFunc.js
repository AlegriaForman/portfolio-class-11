var aboutArr = [];
var contactArr = [];

function Pics (opts) {
  this.name = opts.name;
  this.image = opts.image;
}

Pics.skillsPicture = [];

Pics.prototype.aboutPics = function () {
  var template = Handlebars.compile($('#about-template').text());
  return template(this);
};

Pics.prototype.skillsPics = function () {
  var template = Handlebars.compile($('#skills-template').text());
  return template(this);
};

Pics.prototype.contactPics = function () {
  var template = Handlebars.compile($('#contact-template').text());
  return template(this);
};

Pics.loadSkillsPics = function(rawData) {
  Pics.skillsPicture = rawData.map(function(ele) {
    return new Pics(ele);
  });
};

Pics.getSkillsPics = function(){
  $.getJSON('/scripts/skills.json', function(data){
    localStorage.rawData = JSON.stringify(data);
    Pics.loadSkillsPics(data);
    contentView.initPortfolio();
  });
};

Pics.fetchSkillsPics = function(){
  if (localStorage.rawData) {
    $.ajax ({
      url: '/scripts/skills.json',
      type: 'HEAD',
      success: function(data, message, xhr){
        console.log(xhr);
        var eTag = xhr.getResponseHeader('eTag');
        if (!localStorage.eTag || eTag !== localStorage.eTag) {
          localStorage.eTag = eTag;
          localStorage.clear();
        } else {
          Pics.loadSkillsPics(JSON.parse(localStorage.rawData));
          contentView.initPortfolio();
        }
      }
    });
  } else {
    Pics.getSkillsPics();
  }
};

aboutData.forEach(function(ele) {
  aboutArr.push(new Pics(ele));
});

aboutArr.forEach(function (a) {
  $('#about-div').append(a.aboutPics());
});

contactData.forEach(function(ele) {
  contactArr.push(new Pics(ele));
});

contactArr.forEach(function (a) {
  $('#contact-div').append(a.contactPics());
});
