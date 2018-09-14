import { collections } from '../../../datastructure/datastructure.js';
import { Template } from 'meteor/templating';
import SimpleSchema from 'simpl-schema';
import '../../modal/modal.js';
import './env.html';
import { setInModalTemplate, loadDocuments, removeDocument, resetSelectedDocument, resetInModalTemplate, setSelectedDocument, getDocumentById } from '../../../api/client/actions.js';


let _collection = collections.envs;

SimpleSchema.extendOptions(['autoform']);


Template.insertEnv.helpers({
    'getMongoObject': () => {
        return _collection;
    }
});

Template.updateEnv.helpers({
    'getMongoObject': () => {
        return _collection;
    },
    'selectedDocument': () => {
        return _collection.findOne({_id: Session.get('selectedDocument')._id});
    }
});

Template.detailsEnv.helpers({
    'selectedDocument': () => {
        return getDocumentById(_collection, FlowRouter.getParam('_id'));
    },
    'modalLabel': () => {
        return "Environnement";
    }
});

Template.detailsEnv.events({
    'click .mod-item': (e) => {
        setInModalTemplate({
            template: 'updateEnv',
            label: 'Update environnement'
        });
        setSelectedDocument(e.target.id);
    },
});

Template.envs.helpers({
    'loadCollection': () => {
        return loadDocuments(_collection);
    },
    'rootPath': () => {
        return "/env/detail/";
    }
});

Template.envs.events({
    'click .btn-remove': (e) => {
        removeDocument(_collection, e.target.id);
    },
    'click .add-new-item': (e) => {
        setInModalTemplate({
            template: 'insertEnv',
            label: 'Add new environnement'
        });
        resetSelectedDocument();
    },
    'click .mod-item': (e) => {
        setInModalTemplate({
            template: 'updateEnv',
            label: 'Update environnement'
        });
        setSelectedDocument(e.target.id);
    },
    'click .details-env-modal': (e) => {
        resetInModalTemplate();
        setSelectedDocument(e.target.id);
    }
});

