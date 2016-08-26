articleView.renderFooter = function() {
  var statsRender = Handlebars.compile($('#stats-template').html());
  $('#description-total .words').text(Project.numWordsAll());
};

Project.fetchAll(articleView.renderFooter);
