//import { Tracker } from 'meteor/tracker';
//import { Mongo } from 'meteor/mongo';
import { Tabular } from "meteor/aldeed:tabular";
import { $ } from 'meteor/jquery';
import { collections } from '../../../datastructure/datastructure.js';
import { ReactiveVar } from 'meteor/reactive-var';
import { Template } from 'meteor/templating';
import SimpleSchema from 'simpl-schema';
import '../../modal/modal.js';
import './env.html';

let _collection = collections.envs;

SimpleSchema.extendOptions(['autoform']);


Template.insertEnv.helpers({
    'envCollection': () => {
        return _collection;
    }
});

Template.updateEnv.helpers({
    'envCollection': () => {
        return _collection;
    },
    'selectedEnv': () => {
        return _collection.findOne({_id: session.get('selectedEnv')});
    },
    'selectedDocument': () => {
        return _collection.findOne({_id: Session.get('selectedDocument')._id});
    }
});

Template.detailsEnv.helpers({
    'selectedDocument': () => {
        return _collection.findOne({_id: FlowRouter.getParam('_id')});
    },
});

Template.detailsEnv.events({
    'click .mod-env-modal': (e) => {
        Session.set('inModalTemplete', {
            template: 'updateEnv',
            label: 'Update environnement'
        });
        Session.set('selectedDocument', {
            _id: e.target.id,
        });
        console.dir(Session.get('selectedDocument'));
    },
});

Template.envs.helpers({
    'envCollection': () => {
        console.log('envCollection called');
        _res = _collection.find({}).fetch();
        //console.dir(_res);
        return _res;
    },
});

Template.envs.events({
    'click .btn-remove': (e) => {
        console.log(e.target.id);
        _collection.remove({_id: e.target.id});
    },
    'click .env-modal': (e) => {
        Session.set('inModalTemplete', {
            template: 'insertEnv',
            label: 'Add new environnement'
        });
        console.log(e.target);
    },
    'click .mod-env-modal': (e) => {
        Session.set('inModalTemplete', {
            template: 'updateEnv',
            label: 'Update environnement'
        });
        Session.set('selectedDocument', {
            _id: e.target.id,
        });
        console.dir(Session.get('selectedDocument'));
    },
    'click .details-env-modal': (e) => {
        Session.set('inModalTemplete', {});
        Session.set('selectedDocument', {
            _id: e.target.id,
        });
        console.dir(Session.get('selectedDocument'));
    }
});




