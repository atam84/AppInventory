import { Meteor } from 'meteor/meteor';
import { collections } from '../imports/datastructure/datastructure.js';

Meteor.methods({
    sendEmail: function(doc) {
        console.log('data recieved from client');
        console.dir(doc);
    },
    'get.collection': (collection) => {
        console.log(' > send data collection ' + collection);
        return collections[collection].find({}).fetch();
    },
    'isEnvDuplicated': (params) => {
        console.dir(params);
        return collections.envs.findOne(params);
    }
});


collections.envs.before.insert((userId, doc) => {
    doc.createdAt = Date.now();
});