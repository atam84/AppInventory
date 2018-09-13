FlowRouter.route('/projects', {
    name: 'app.projects',
    action: function() {
    BlazeLayout.render('appViews', {main: 'Projects'});
    }
});
FlowRouter.route('/project/details/:_id', {
    name: 'app.envs',
    action: function() {
    BlazeLayout.render('appViews', {main: 'detailsProject'});
    }
});

