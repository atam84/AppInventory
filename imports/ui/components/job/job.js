import { collections } from '../../../datastructure/datastructure.js';
import { Template } from 'meteor/templating';
import SimpleSchema from 'simpl-schema';
import { loadDocuments, removeDocument, getDocumentById } from "../../../api/client/actions.js"
import { setInModalTemplateActionAdd } from "../../../api/client/actions.js"
import { setInModalTemplateActionMod  } from "../../../api/client/actions.js"
import '../../modal/modal.js';
import './job.html';

let _collection = collections.jobs;
let __Setup = {
    update: {
        template: "updateJob",
        label: "Update job"
    },
    insert: {
        template: "insertJob",
        label: "Insert new job"
    },
    defaultLabel: "Job",
    collectionName: "jobs",
    rootPath: "/job/detail/",
    target: ""
}

SimpleSchema.extendOptions(['autoform']);


Template.insertJob.helpers({
    'getMongoObject': () => {
        return _collection;
    }
});

Template.updateJob.helpers({
    'getMongoObject': () => {
        return _collection;
    },
    'selectedDocument': () => {
        return _collection.findOne({_id: Session.get('selectedDocument')._id});
    }
});

Template.detailsJob.helpers({
    'selectedDocument': () => {
        return getDocumentById(_collection, FlowRouter.getParam('_id'));
    },
    'modalLabel': () => {
        return __Setup.defaultLabel;
    }
});


Template.detailsJob.events({
    'click .mod-item': (e) => {
        __Setup.target = e.target.id;
        setInModalTemplateActionMod(__Setup);
    },
});

Template.jobs.helpers({
    'loadCollection': () => {
        return loadDocuments(_collection);
    },
    'rootPath': () => {
        return __Setup.rootPath;
    }
});

Template.jobs.events({
    'click .btn-remove': (e) => {
        removeDocument(_collection, e.target.id);
    },
    'click .add-new-item': (e) => {
        __Setup.target = e.target.id;
        setInModalTemplateActionAdd(__Setup);
    },
    'click .mod-item': (e) => {
        __Setup.target = e.target.id;
        setInModalTemplateActionMod(__Setup);
    }
});

