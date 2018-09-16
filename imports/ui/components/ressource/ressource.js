import { collections } from '../../../datastructure/datastructure.js';
import { Template } from 'meteor/templating';
import SimpleSchema from 'simpl-schema';
import { loadDocuments, removeDocument, getDocumentById } from "../../../api/client/actions.js"
import { setInModalTemplateActionAdd } from "../../../api/client/actions.js"
import { setInModalTemplateActionMod  } from "../../../api/client/actions.js"
import '../../modal/modal.js';
import './ressource.html';

let _collection = collections.ressources;
let __Setup = {
    update: {
        template: "updateRessource",
        label: "Update ressource"
    },
    insert: {
        template: "insertRessource",
        label: "Insert new ressource"
    },
    defaultLabel: "Ressource",
    collectionName: "ressources",
    rootPath: "/ressource/detail/",
    target: ""
}

SimpleSchema.extendOptions(['autoform']);


Template.insertRessource.helpers({
    'getMongoObject': () => {
        return _collection;
    }
});

Template.updateRessource.helpers({
    'getMongoObject': () => {
        return _collection;
    },
    'selectedDocument': () => {
        return _collection.findOne({_id: Session.get('selectedDocument')._id});
    }
});

Template.detailsRessource.helpers({
    'selectedDocument': () => {
        return getDocumentById(_collection, FlowRouter.getParam('_id'));
    },
    'modalLabel': () => {
        return __Setup.defaultLabel;
    }
});


Template.detailsRessource.events({
    'click .mod-item': (e) => {
        __Setup.target = e.target.id;
        setInModalTemplateActionMod(__Setup);
    },
});

Template.ressources.helpers({
    'loadCollection': () => {
        return loadDocuments(_collection);
    },
    'rootPath': () => {
        return __Setup.rootPath;
    }
});

Template.ressources.events({
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

