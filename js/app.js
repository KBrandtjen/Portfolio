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

Project.loadAll = function(ourLocalData) {
  ourLocalData.sort(function(a,b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  }).forEach(function(ele) {
    Project.allProjects.push(new Project(ele));
  });
};

Project.fetchAll = function() {
  if (localStorage.fullProjects) {
    var retreivedData = JSON.parse(localStorage.fullProjects);
    Project.loadAll(retreivedData);
    articleView.renderIndexPage();
  }
  else {
    $.getJSON('js/fullProjects.json', function (data) {
      Project.loadAll(data);
      console.log('hi');
      localStorage.fullProjects = JSON.stringify(data);
      articleView.renderIndexPage();
    });
  }
};
