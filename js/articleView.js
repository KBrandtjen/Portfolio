'use strict';

var articleView = {};

articleView.populateFilters = function() {
  $('article').not('template').each(function() {
    var authorName, category, optionTag;
    // authorName = $(this).find('#projects h2').text();
    // optionTag = '<option value="' + authorName + '">' + authorName + '</option>';
    // $('#author-filter').append(optionTag);
    category = $(this).attr('data-category');
    optionTag = '<option value="' + category + '">' + category + '</option>';
    if ($('#category-filter option[value="' + category + '"]').length === 0) {
      $('category-filter').append(optionTag);
    }
  });
};






articleView.populateFilters();
