import { collections } from '../../../datastructure/datastructure.js';
import { Template } from 'meteor/templating';
import SimpleSchema from 'simpl-schema';
import { loadDocuments, removeDocument, getDocumentById } from "../../../api/client/actions.js"
import { setInModalTemplateActionAdd } from "../../../api/client/actions.js"
import { setInModalTemplateActionMod  } from "../../../api/client/actions.js"
//import { optionSelectRessources } from "../../../api/client/selectors.js"

import '../../modal/modal.js';
import './application.html';

let _collection = collections.applications;
let __Setup = {
    update: {
        template: "updateApp",
        label: "Update application"
    },
    insert: {
        template: "insertApp",
        label: "Insert new application"
    },
    defaultLabel: "Application",
    collectionName: "applications",
    rootPath: "/application/detail/",
    target: ""
}

SimpleSchema.extendOptions(['autoform']);


Template.insertApp.helpers({
    'getMongoObject': () => {
        return _collection;
    }/*,
    'optionSelectRessources': () => {
        return optionSelectRessources();
    }*/
});

Template.updateApp.helpers({
    'getMongoObject': () => {
        return _collection;
    },
    'selectedDocument': () => {
        return _collection.findOne({_id: Session.get('selectedDocument')._id});
    }
});

Template.detailsApp.helpers({
    'selectedDocument': () => {
        return getDocumentById(_collection, FlowRouter.getParam('_id'));
    },
    'modalLabel': () => {
        return __Setup.defaultLabel;
    }
});


Template.detailsApp.events({
    'click .mod-item': (e) => {
        __Setup.target = e.target.id;
        setInModalTemplateActionMod(__Setup);
    },
});

Template.applications.helpers({
    'loadCollection': () => {
        return loadDocuments(_collection);
    },
    'rootPath': () => {
        return __Setup.rootPath;
    }
});

Template.applications.events({
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

