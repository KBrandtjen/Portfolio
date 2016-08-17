'use strict';

var projects = [];

function Project (opts) {
  this.img = opts.img;
  this.title = opts.title;
  this.author = opts.author;
  this.publishedOn = opts.publishedOn;
  this.description = opts.description;
  this.category = opts.category;
}

Project.prototype.toHtml = function() {
  var $newProject = $('articles.template').clone();
  $newProject.find('img').attr(this.img);
  $newProject.find('h1').text(this.title);
  $newProject.find('h2').text(this.author);
  $newProject.find('.project-description').html(this.description);
  $newProject.attr('data-category', this.category);
  $newProject.find('time[pubdate]').attr('title', this.publishedOn);
  $newProject.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn)) / 60 / 60 / 24 / 1000 ) + ' days ago');

  $('article.template').removeClass('template');
  return $newProject;
};

ourLocalData.sort(function(firstElement, secondElement) {
  return (new Date(secondElement.publishedOn)) - (new Date(firstElement.publishedOn));
});

ourLocalData.forEach(function(theCurrentProjectObject) {
  projects.push(new Project(theCurrentProjectObject));
});

projects.forEach(function(article) {
  $('#projects').append(article.toHtml());
});
