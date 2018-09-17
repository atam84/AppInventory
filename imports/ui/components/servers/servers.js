console.log('Load server module.');
import { collections } from '../../../datastructure/datastructure.js';
import { Template } from 'meteor/templating';
import SimpleSchema from 'simpl-schema';
import { loadDocuments, removeDocument, getDocumentById } from "../../../api/client/actions.js"
import { setInModalTemplateActionAdd } from "../../../api/client/actions.js"
import { setInModalTemplateActionMod  } from "../../../api/client/actions.js"
import '../../modal/modal.js';
import './servers.html';

let _collection = collections.servers;
let __Setup = {
    update: {
        template: "updateServer",
        label: "Update server"
    },
    insert: {
        template: "insertServer",
        label: "Insert new server"
    },
    defaultLabel: "Server",
    collectionName: "servers",
    rootPath: "/server/detail/",
    target: ""
}

SimpleSchema.extendOptions(['autoform']);


Template.insertServer.helpers({
    'getMongoObject': () => {
        return _collection;
    }
});

Template.updateServer.helpers({
    'getMongoObject': () => {
        return _collection;
    },
    'selectedDocument': () => {
        return _collection.findOne({_id: Session.get('selectedDocument')._id});
    }
});

Template.detailsServer.helpers({
    'selectedDocument': () => {
        return getDocumentById(_collection, FlowRouter.getParam('_id'));
    },
    'modalLabel': () => {
        return __Setup.defaultLabel;
    }
});


Template.detailsServer.events({
    'click .mod-item': (e) => {
        __Setup.target = e.target.id;
        setInModalTemplateActionMod(__Setup);
    },
});

Template.servers.helpers({
    'loadCollection': () => {
        return loadDocuments(_collection);
    },
    'rootPath': () => {
        return __Setup.rootPath;
    }
});

Template.servers.events({
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

