import { collections } from '../../../datastructure/datastructure.js';
import { Template } from 'meteor/templating';
import SimpleSchema from 'simpl-schema';
import '../../modal/modal.js';
import './project.html';
import { setInModalTemplate, loadDocuments, removeDocument, resetSelectedDocument, resetInModalTemplate, setSelectedDocument, getDocumentById } from '../../../api/client/actions.js';


let _collection = collections.projects;

SimpleSchema.extendOptions(['autoform']);


Template.insertProject.helpers({
    'projectCollection': () => {
        return _collection;
    }
});

Template.updateProject.helpers({
    'projectCollection': () => {
        return _collection;
    },
    'selectedDocument': () => {
        //return getDocumentById(_collection, getSelectedDocumentId());
        return _collection.findOne({_id: Session.get('selectedDocument')._id});
    }
});

Template.detailsProject.helpers({
    'selectedDocument': () => {
        return getDocumentById(_collection, FlowRouter.getParam('_id'));
        //return _collection.findOne({_id: FlowRouter.getParam('_id')});
    },
});

Template.detailsProject.events({
    'click .mod-project-modal': (e) => {
        setInModalTemplate({
            template: 'updateProject',
            label: 'Update project'
        });
        setSelectedDocument(e.target.id);
    },
});


Template.Projects.helpers({
    'projectCollection': () => {
        return loadDocuments(_collection);
    },
});

Template.Projects.events({
    'click .btn-remove': (e) => {
        //_collection.remove({_id: e.target.id});
        removeDocument(_collection, e.target.id);
    },
    'click .project-modal': (e) => {
        setInModalTemplate({
            template: 'insertProject',
            label: 'Add new project'
        });
        resetSelectedDocument();
    },
    'click .mod-project-modal': (e) => {
        setInModalTemplate({
            template: 'updateProject',
            label: 'Update project'
        });
        setSelectedDocument(e.target.id);
    },
    'click .details-project-modal': (e) => {
        resetInModalTemplate();
        setSelectedDocument(e.target.id);
    }
});




/******************************************************************************************************* */
/*
import { collections } from '../../../datastructure/datastructure.js';
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



*/