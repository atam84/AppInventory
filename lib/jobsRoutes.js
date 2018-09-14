FlowRouter.route('/jobs', {
    name: 'app.jobs',
    action: function() {
    BlazeLayout.render('appViews', {main: 'jobs'});
    }
});
FlowRouter.route('/job/detail/:_id', {
    name: 'app.jobs',
    action: function() {
    BlazeLayout.render('appViews', {main: 'detailsJob'});
    }
});
