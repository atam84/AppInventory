FlowRouter.route('/operating-systems', {
    name: 'app.os',
    action: function() {
    BlazeLayout.render('appViews', {main: 'operatingSystems'});
    }
});
FlowRouter.route('/operating-system/detail/:_id', {
    name: 'app.os',
    action: function() {
    BlazeLayout.render('appViews', {main: 'detailsOs'});
    }
});
