FlowRouter.route('/localizations', {
    name: 'app.localizations',
    action: function() {
    BlazeLayout.render('appViews', {main: 'localizations'});
    }
});

FlowRouter.route('/localization/detail/:_id', {
    name: 'app.localizations',
    action: function() {
    BlazeLayout.render('appViews', {main: 'detailsLocalization'});
    }
});