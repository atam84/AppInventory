//import { Tracker } from 'meteor/tracker';
//import { Mongo } from 'meteor/mongo';

import { dataStructure } from '../../../datastructure/datastructure.js'
import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

import './application.html';

application = dataStructure.application;

Template.application.helpers({
    application_schema: function() {
        return application;
    }
});

