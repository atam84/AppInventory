//import { Tracker } from 'meteor/tracker';
//import { Mongo } from 'meteor/mongo';

import { dataStructure } from '../../../datastructure/datastructure.js'
import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

import './technology.html';

technology = dataStructure.technology;

Template.technology.helpers({
    technology_schema: function() {
        return technology;
    }
});
