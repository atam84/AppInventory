import { collections } from '../../../datastructure/datastructure.js';
import { Template } from 'meteor/templating';
import SimpleSchema from 'simpl-schema';
import { loadDocuments, removeDocument, getDocumentById } from "../../../api/client/actions.js"
import { setInModalTemplateActionAdd } from "../../../api/client/actions.js"
import { setInModalTemplateActionMod  } from "../../../api/client/actions.js"
import '../../modal/modal.js';
import './env.html';

let _collection = collections.envs;
let __Setup = {
    update: {
        template: "updateEnv",
        label: "Update enrironnemet"
    },
    insert: {
        template: "insertEnv",
        label: "Insert new enrironnemet"
    },
    defaultLabel: "Enrironnemet",
    collectionName: "envs",
    rootPath: "/env/detail/",
    target: ""
}

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
        return __Setup.defaultLabel;
    }
});


Template.detailsEnv.events({
    'click .mod-item': (e) => {
        __Setup.target = e.target.id;
        setInModalTemplateActionMod(__Setup);
    },
});

Template.envs.helpers({
    'loadCollection': () => {
        return loadDocuments(_collection);
    },
    'rootPath': () => {
        return __Setup.rootPath;
    }
});

Template.envs.events({
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



/*
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

*/
