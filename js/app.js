'use strict';

function Project (opts) {
  for (keys in opts) {
    this[keys] = opts[keys];
  }
  // this.img = opts.img;
  // this.title = opts.title;
  // this.author = opts.author;
  // this.publishedOn = opts.publishedOn;
  // this.description = opts.description;
  // this.category = opts.category;
}


Project.allProjects = [];

Project.prototype.toHtml = function() {
  var templateRender = Handlebars.compile($(source).text());
  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn)) / 60 / 60 / 24 / 1000 );
  this.publishStatus = this.publishedOn ? 'published ' + this.daysAgo + ' days ago' : '(draft)';
  this.body = marked(this.body);
  // var source = $('#projects-template').html();
  return templateRender(this);
};

Project.loadAll = function (ourLocalData) {
  ourLocalData.sort(function(a,b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  }).forEach(function(ele) {
    Project.allProjects.push(new Project(ele));
  });
};

//
// ourLocalData.forEach(function(theCurrentProjectObject) {
//   projects.push(new Project(theCurrentProjectObject));
// });
//
// projects.forEach(function(article) {
//   $('#projects').append(article.toHtml());
// });

Project.fetchAll = function() {
  if (localStorage.fullprojects) {
    var retreivedData = JSON.parse(localStorage.getItem('fullprojects'));
    Project.loadAll(retreivedData);
    articleView.renderIndexPage();
    // Find renderIndexPage
  }
  else {
    $.getJSON('js/fullprojects.json', function(data) {
      localStorage.setItem('fullprojects', JSON.stringify(data));
      Project.fetchAll();
    });
  }
};

Project.fetchAll();
