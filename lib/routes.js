/*
FlowRouter.route('/', {
    action: function() {
        BlazeLayout.render('mainLayout', { main: 'navigationBar'} );
    },
    name: 'dashboard_global'
});
*/

import './envsRoutes.js';
import './projectsRoutes.js';

FlowRouter.route('/', {
    name: 'home',
    action: function() {
    BlazeLayout.render('appViews', {main: 'noteOverview'});
    }
});


FlowRouter.route('/ressources', {
    name: 'app.ressources',
    action: function() {
    BlazeLayout.render('appViews', {main: 'ressources'});
    }
});

FlowRouter.route('/jobs', {
    name: 'app.jobs',
    action: function() {
    BlazeLayout.render('appViews', {main: 'jobs'});
    }
});

FlowRouter.route('/os', {
    name: 'app.os',
    action: function() {
    BlazeLayout.render('appViews', {main: 'os'});
    }
});




FlowRouter.route('/technologies', {
    name: 'app.technologies',
    action: function() {
    BlazeLayout.render('appViews', {main: 'technologies'});
    }
});

FlowRouter.route('/applications', {
    name: 'app.applications',
    action: function() {
    BlazeLayout.render('appViews', {main: 'applications'});
    }
});

FlowRouter.route('/localizations', {
    name: 'app.localizations',
    action: function() {
    BlazeLayout.render('appViews', {main: 'localizations'});
    }
});

FlowRouter.route('/servers', {
    name: 'app.servers',
    action: function() {
    BlazeLayout.render('appViews', {main: 'servers'});
    }
});


/********* for tests *********/

FlowRouter.route('/test', {
    name: 'test',
    action: function() {
    BlazeLayout.render('appViews', {main: 'test'});
    }
});


FlowRouter.route('/somedata', {
    name: 'somedata',
    action: function() {
    BlazeLayout.render('appViews', {main: 'someData'});
    }
});

FlowRouter.route('/testautoform', {
    name: 'testautoform',
    action: function() {
    BlazeLayout.render('appViews', {main: 'contactForm'});
    }
});

FlowRouter.route('/technology', {
    name: 'technology',
    action: function() {
    BlazeLayout.render('appViews', {main: 'technology'});
    }
});

FlowRouter.route('/application', {
    name: 'application',
    action: function() {
    BlazeLayout.render('appViews', {main: 'application'});
    }
});

FlowRouter.route('/env', {
    name: 'env',
    action: function() {
    BlazeLayout.render('appViews', {main: 'env'});
    }
});




FlowRouter.route('/insertProject', {
    name: 'insertProject',
    action: function() {
    BlazeLayout.render('appViews', {main: 'insertProject'});
    }
});
FlowRouter.route('/updateProject', {
    name: 'updateProject',
    action: function() {
    BlazeLayout.render('appViews', {main: 'updateProject'});
    }
});
FlowRouter.route('/viewProjects', {
    name: 'viewProjects',
    action: function() {
    BlazeLayout.render('appViews', {main: 'viewProjects'});
    }
});
FlowRouter.route('/detailsProject', {
    name: 'detailsProject',
    action: function() {
    BlazeLayout.render('appViews', {main: 'detailsProject'});
    }
});



