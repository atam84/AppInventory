import { collections } from '../../../datastructure/datastructure.js';
import { Template } from 'meteor/templating';
import SimpleSchema from 'simpl-schema';
import '../../modal/modal.js';
import './job.html';
import { setInModalTemplate, loadDocuments, removeDocument, resetSelectedDocument, resetInModalTemplate, setSelectedDocument, getDocumentById } from '../../../api/client/actions.js';


let _collection = collections.jobs;

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
        return "Job";
    }
});

Template.detailsJob.events({
    'click .mod-item': (e) => {
        setInModalTemplate({
            template: 'updateJob',
            label: 'Update job'
        });
        setSelectedDocument(e.target.id);
    },
});

Template.jobs.helpers({
    'loadCollection': () => {
        return loadDocuments(_collection);
    },
    'rootPath': () => {
        return "/job/detail/";
    }
});

Template.jobs.events({
    'click .btn-remove': (e) => {
        removeDocument(_collection, e.target.id);
    },
    'click .add-new-item': (e) => {
        setInModalTemplate({
            template: 'insertJob',
            label: 'Add new job'
        });
        resetSelectedDocument();
    },
    'click .mod-item': (e) => {
        setInModalTemplate({
            template: 'updateJob',
            label: 'Update job'
        });
        setSelectedDocument(e.target.id);
    },
    'click .details-env-modal': (e) => {
        resetInModalTemplate();
        setSelectedDocument(e.target.id);
    }
});

