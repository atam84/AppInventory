FlowRouter.route('/ressources', {
    name: 'app.ressources',
    action: function() {
    BlazeLayout.render('appViews', {main: 'ressources'});
    }
});
FlowRouter.route('/ressource/detail/:_id', {
    name: 'app.ressources',
    action: function() {
    BlazeLayout.render('appViews', {main: 'detailsRessource'});
    }
});