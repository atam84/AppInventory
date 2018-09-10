//import { Tracker } from 'meteor/tracker';
//import { Mongo } from 'meteor/mongo';
import { Tabular } from "meteor/aldeed:tabular";
import { $ } from 'meteor/jquery';
import { collections } from '../../../datastructure/datastructure.js';
import { ReactiveVar } from 'meteor/reactive-var';
import { Template } from 'meteor/templating';
import SimpleSchema from 'simpl-schema';
import '../../modal/modal.js';
import './job.html';

let _collection = collections.jobs;


SimpleSchema.extendOptions(['autoform']);


Template.insertJob.helpers({
    'jobCollection': () => {
        return _collection;
    }
});

Template.updateJob.helpers({
    'jobCollection': () => {
        return _collection;
    },
    'selectedJob': () => {
        return _collection.findOne({_id: session.get('selectedJob')});
    }
});


Template.jobs.helpers({
    'jobCollection': () => {
        console.log('jobCollection called');
        _res = _collection.find({}).fetch();
        console.dir(_res);
        return _res;
    },
});

Template.jobs.events({
    'click .btn-remove': (e) => {
        console.log(e.target.id);
        _collection.remove({_id: e.target.id});
    },
    'click .job-modal': (e) => {
        Session.set('inModalTemplete', {
            template: 'insertJob',
            label: 'Add new job'
        });
        console.log(e.target);
    }
});


