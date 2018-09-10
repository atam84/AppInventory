//import { Tracker } from 'meteor/tracker';
//import { Mongo } from 'meteor/mongo';
import { Tabular } from "meteor/aldeed:tabular";
import { $ } from 'meteor/jquery';
import { collections } from '../../../datastructure/datastructure.js';
import { ReactiveVar } from 'meteor/reactive-var';
import { Template } from 'meteor/templating';
import SimpleSchema from 'simpl-schema';
import '../../modal/modal.js';
import './project.html';

prj_collection = collections.projects;



SimpleSchema.extendOptions(['autoform']);


Template.insertProject.helpers({
    'projectCollection': () => {
        //console.dir(collections.projects.find({}).fetch());
        return prj_collection;
    }
});

Template.updateProject.helpers({
    'projectCollection': () => {
        return prj_collection;
    },
    'selectedProject': () => {
        return prj_collection.findOne({_id: session.get('selectedProject')});
    }
});


Template.projects.helpers({
    'projectCollection': () => {
        console.log('projectCollection called');
        _res = prj_collection.find({}).fetch();
        console.dir(_res);
        return _res;
    },
});

Template.projects.events({
    'click .btn-remove': (e) => {
        console.log(e.target.id);
        prj_collection.remove({_id: e.target.id});
    },
    'click .project-modal': (e) => {
        Session.set('inModalTemplete', {
            template: 'insertProject',
            label: 'Add new project'
        });
        console.log(e.target);
    }
});

/*
TabularTables = {};
Template.registerHelper('TabularTables', TabularTables);
TabularTables.Projects = new Tabular.Table({
    name: 'Projects',
    collection: collections.projects,
    columns: [
        {data: 'project', title: 'Name'},
        {data: 'projectId', title: 'Id'},
        {data: 'projectCode', title: 'Code'},
        {data: 'info.startDate', title: 'info.startDate'},
        {data: 'info.endDate', title: 'info.endDate'},
        {data: 'info.timeLife', title: 'info.timeLife'},
        {data: 'description', title: 'description'},
    ]
});
*/

