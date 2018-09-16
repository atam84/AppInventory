FlowRouter.route('/projects', {
    name: 'app.projects',
    action: function() {
    BlazeLayout.render('appViews', {main: 'projects'});
    }
});
FlowRouter.route('/project/detail/:_id', {
    name: 'app.envs',
    action: function() {
    BlazeLayout.render('appViews', {main: 'detailsProject'});
    }
});

