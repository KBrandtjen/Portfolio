// Configure the two routes for this page with page.js.


page('/', projectController.reveal);

page('/about', aboutController.reveal);


// Call the page function.

page();
