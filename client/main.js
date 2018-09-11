import { Meteor } from 'meteor/meteor'
import { Session } from 'meteor/session';
import { collections } from '../imports/datastructure/datastructure.js';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../imports/api/both/both.js';
//import { dataStructure } from '../imports/datastructure/datastructure';
/*import popper from 'popper.js';
global.Popper = popper;*/

global_collections = collections;
//import '../imports/ui/test/testautoform.js';
import '../imports/ui/components/technology/technology.js';
import '../imports/ui/components/application/application.js';
import '../imports/ui/components/env/env.js';
import '../imports/ui/components/project/project.js';
import '../imports/ui/components/ressource/ressource.js';
import '../imports/ui/components/job/job.js';
import '../imports/ui/body/body.js';
import '../lib/routes.js';
import './main.scss';
//import './main.html';


collections.envs.before.insert((userId, doc) => {
    console.log('env vérification server side.');
    console.dir(userId);
    console.log('-------');
    console.dir(doc);
    console.log('-------');
    console.dir(this);
    console.log('-------');
    console.dir(this.transform);
});




