'use strict';

var projects = [];

function Project (opts) {
  this.img = opts.img;
  this.title = opts.title;
  this.author = opts.author;
  this.publishedOn = opts.publishedOn;
  this.description = opts.description;
  this.category = opts.category
}

Project.prototype.toHtml = function() {
  var $newProject = $('articles.template').clone();
  $newProject.attr('data-category', this.category);


}
