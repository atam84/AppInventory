FlowRouter.route('/envs', {
    name: 'app.envs',
    action: function() {
    BlazeLayout.render('appViews', {main: 'envs'});
    }
});
FlowRouter.route('/env/detail/:_id', {
    name: 'app.envs',
    action: function() {
    BlazeLayout.render('appViews', {main: 'detailsEnv'});
    }
});
