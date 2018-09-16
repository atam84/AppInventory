FlowRouter.route('/applications', {
    name: 'app.applications',
    action: function() {
    BlazeLayout.render('appViews', {main: 'applications'});
    }
});
FlowRouter.route('/application/detail/:_id', {
    name: 'app.applications',
    action: function() {
    BlazeLayout.render('appViews', {main: 'detailsApp'});
    }
});