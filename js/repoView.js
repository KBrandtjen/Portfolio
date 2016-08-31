(function(module) {
  var repoView = {};

  var repoCompiler = function(aRepo){
    var templateHandler = Handlebars.compile($('#repo-template').text());
    return templateHandler(aRepo);
  };

  repoView.renderRepos = function() {
    $('#about ul').empty().append(
      reposObj.withTheAttribute('id')
      .map(repoCompiler)
    );
  };

  reposObj.requestRepos(repoView.renderRepos);
  module.repoView = repoView;
})(window);
