articleView.renderFooter = function() {
  var statsRender = Handlebars.compile($('#stats-template').html());
  $('#description-total .words').text(Project.numWordsAll());
};

Project.fetchAll(articleView.renderFooter);

// This page is rendering my stats for the portfolio. I discussed this somewhere else but I want to make the stats more relevant to my site. Possibly count the total hrs spent on a project or the number of skills used in all the projects.
