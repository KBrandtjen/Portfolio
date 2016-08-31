(function(module) {
  var reposObj = {};

  reposObj.allRepos = [];

  reposObj.requestRepos = function(callback) {
// Create an ajax function that will request the repos from github
    $.when(
      $.get('github/users/KBrandtjen/repos' +
            '?per_page=5' +
            '&sort=updated')
            .done(function(data) {
              reposObj.allRepos = data;
            })
    ).done(callback);
  };

  reposObj.withTheAttribute = function(myAttr) {
    return reposObj.allRepos.filter(function(aRepo) {
      return aRepo[myAttr];
    });
  };

  module.reposObj = reposObj;
})(window);
