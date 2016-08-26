(function(module) {

  function Project (opts) {
    for (keys in opts) {
      this[keys] = opts[keys];
    }
  }

  Project.allProjects = [];

  Project.prototype.toHtml = function() {
    var source = $('#projects-template').html();
    this.daysAgo = parseInt((new Date() - new Date(this.publishedOn)) / 60 / 60 / 24 / 1000 );
    this.publishStatus = this.publishedOn ? 'published ' + this.daysAgo + ' days ago' : '(draft)';
    var templateRender = Handlebars.compile(source);
    return templateRender(this);
  };
  // Right now my page is not displaying the data the way I want it to. It orders the projects by date but I want the date to be displayed as " Published 5 days ago". Right now it appear as 08/12/16. So I want to change the formatting of the date. 

  Project.loadAll = function(ourLocalData) {
    Project.allProjects = ourLocalData.sort(function(a,b) {
      return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
    }).map(function(ele) {
      return new Project(ele);
    });
  };
// Get rid of this commented code. I have replaced the fetchAll function so I no longer need this old version.
// Project.fetchAll = function() {
//   if (localStorage.fullProjects) {
//     var retreivedData = JSON.parse(localStorage.fullProjects);
//     Project.loadAll(retreivedData);
//     articleView.renderIndexPage();
//     articleView.renderFooter();
//   }
//   else {
//     $.getJSON('js/fullProjects.json', function (data) {
//       Project.loadAll(data);
//       console.log('hi');
//       localStorage.fullProjects = JSON.stringify(data);
//       articleView.renderIndexPage();
//       articleView.renderFooter();
//     });
//   }
// };

  Project.fetchAll = function(nextFunction) {
    if (localStorage.fullProjects) {
      $.ajax({
        type: 'HEAD',
        url: 'js/fullProjects.json',
        success: function(data, message, xhr) {
          var eTag = xhr.getResponseHeader('eTag');
          if (!localStorage.eTag || eTag !== localStorage.eTag) {
            Project.getAll(nextFunction);
          } else {
            Project.loadAll(JSON.parse(localStorage.fullProjects));
            nextFunction();
          }
        }
      });
    } else {
      Project.getAll(nextFunction);
    }
  };

  Project.getAll = function(nextFunction) {
    $.getJSON('js/fullProjects.json', function(responseData, message, xhr) {
      localStorage.eTag = xhr.getResponseHeader('eTag');
      Project.loadAll(responseData);
      localStorage.fullProjects = JSON.stringify(responseData);
      nextFunction();
    });
  };


  Project.numWordsAll = function() {
    return Project.allProjects.map(function(currentProject) {
      return currentProject.description.match(/\w+/g).length;
    }).reduce(function(prev, cur) {
      return prev + cur;
    });
  };

  module.Project = Project;
})(window);
