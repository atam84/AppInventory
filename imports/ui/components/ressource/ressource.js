//import { Tracker } from 'meteor/tracker';
//import { Mongo } from 'meteor/mongo';
import { Tabular } from "meteor/aldeed:tabular";
import { $ } from 'meteor/jquery';
import { collections } from '../../../datastructure/datastructure.js';
import { ReactiveVar } from 'meteor/reactive-var';
import { Template } from 'meteor/templating';
import SimpleSchema from 'simpl-schema';
import '../../modal/modal.js';
import './ressource.html';

let _collection = collections.ressources;




SimpleSchema.extendOptions(['autoform']);


Template.insertRessource.helpers({
    'ressourceCollection': () => {
        return _collection;
    }
});

Template.updateRessource.helpers({
    'ressourceCollection': () => {
        return _collection;
    },
    'selectedRessource': () => {
        return _collection.findOne({_id: session.get('selectedRessource')});
    }
});


Template.ressources.helpers({
    'ressourceCollection': () => {
        console.log('ressourceCollection called');
        _res = _collection.find({}).fetch();
        console.dir(_res);
        return _res;
    },
});

Template.ressources.events({
    'click .btn-remove': (e) => {
        console.log(e.target.id);
        _collection.remove({_id: e.target.id});
    },
    'click .ressource-modal': (e) => {
        Session.set('inModalTemplete', {
            template: 'insertRessource',
            label: 'Add new ressource'
        });
        console.log(e.target);
    }
});


