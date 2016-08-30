'use strict';

(function(module) {
  var articleView = {};

// TODO I need to clean up this code and get rid of the commented code or figure out how to use it. Again, this code relates to the category filters. I would like to get them working. Even though at this point they seem a little useless. As I add more projects to my portfolio I think they will become much more useful.

// articleView.populateFilters = function() {
//   $('article').not('.template').each(function() {
//     var titleName, category, optionTag;
//     titleName = $(this).find('.titleClass').text();
//     optionTag = '<option value="' + titleName + '">' + titleName + '</option>';
//     $('#title-filter').append(optionTag);
//     category = $(this).attr('data-category');
//     optionTag = '<option value="' + category + '">' + category + '</option>';
//     if ($('#category-filter option[value="' + category + '"]').length === 0) {
//       $('#category-filter').append(optionTag);
//     }
//   });
// };
//
// articleView.handleTitleFilter = function() {
//   $('#title-filter').on('change', function() {
//     if ($(this).val()) {
//       $('article').hide();
//       $('article[data-title ="' + $(this).val() + '" ]').fadeIn();
//     } else {
//       $('article').fadeIn();
//       $('article.template').hide();
//     }
//     $('#category-filter').val('');
//   });
// };
//
// articleView.handleCategoryFilter = function() {
//   $('#category-filter').on('change', function() {
//     if ($(this).val()) {
//       $('article').hide();
//       $('article[data-category ="' + $(this).val() + '" ]').fadeIn();
//     } else {
//       $('article').fadeIn();
//       $('article.template').hide();
//     }
//     $('#title-filter').val('');
//   });
// };

  // articleView.handleMainNav = function () {
  //   $('.main-nav').on('click', '.tab', function () {
  //     $('.tab-content').hide();
  //     $('#' + $(this).data('content')).fadeIn();
  //   });
  //   $('.main-nav .tab:first').click();
  // };

  articleView.renderIndexPage = function() {
    Project.allProjects.forEach(function(a) {
      $('#projects').append(a.toHtml('#projects-template'));
      if($('#category-filter option:contains("' + a.category + '")').length === 0) {
        $('#category-filter').append(a.toHtml('#category-filter-template'));
      };
      if($('#title-filter option:contains("' + a.title + '")').length === 0) {
        $('#title-filter').append(a.toHtml('#title-filter-template'));
      };
    });
    // TODO I wanted to add this to the JSON page but couldn't comment. I want to change the information in my projects section. I want them to actually reflect the projects I have created so far in my coding. RIght now I have photos and some filler information but I would like it to actually reflect the projects I have worked on.

  // articleView.populateFilters();
  // articleView.handleTitleFilter();
  // articleView.handleCategoryFilter();
    // articleView.handleMainNav();
  };



  Project.fetchAll(articleView.renderIndexPage);

  module.articleView = articleView;
})(window);
