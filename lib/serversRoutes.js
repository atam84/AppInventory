FlowRouter.route('/servers', {
    name: 'app.servers',
    action: function() {
    BlazeLayout.render('appViews', {main: 'servers'});
    }
});
FlowRouter.route('/server/detail/:_id', {
    name: 'app.servers',
    action: function() {
    BlazeLayout.render('appViews', {main: 'detailsServer'});
    }
});