FlowRouter.route('/envs', {
    name: 'app.envs',
    action: function() {
    BlazeLayout.render('appViews', {main: 'Envs'});
    }
});
FlowRouter.route('/env/detail/:_id', {
    name: 'app.envs',
    action: function() {
    BlazeLayout.render('appViews', {main: 'detailsEnv'});
    }
});
