//import { Tracker } from 'meteor/tracker';
//import { Mongo } from 'meteor/mongo';
import { collections } from '../../../datastructure/datastructure.js';
import { Template } from 'meteor/templating';
import SimpleSchema from 'simpl-schema';
import '../../modal/modal.js';
import './env.html';

let _collection = collections.envs;

SimpleSchema.extendOptions(['autoform']);


Template.insertEnv.helpers({
    'envCollection': () => {
        return _collection;
    }
});

Template.updateEnv.helpers({
    'envCollection': () => {
        return _collection;
    },
    'selectedDocument': () => {
        return getDocumentById(_collection, getSelectedDocumentId());
        //return _collection.findOne({_id: Session.get('selectedDocument')._id});
    }
});

Template.detailsEnv.helpers({
    'selectedDocument': () => {
        return getDocumentById(_collection, FlowRouter.getParam('_id'));
        //return _collection.findOne({_id: FlowRouter.getParam('_id')});
    },
});

Template.detailsEnv.events({
    'click .mod-env-modal': (e) => {
        setInModalTemplate({
            template: 'updateEnv',
            label: 'Update environnement'
        });
        setSelectedDocument(e.target.id);
    },
});

Template.Envs.helpers({
    'envCollection': () => {
        return loadDocuments(_collection);
    },
});

Template.Envs.events({
    'click .btn-remove': (e) => {
        //_collection.remove({_id: e.target.id});
        removeDocument(_collection, e.target.id);
    },
    'click .env-modal': (e) => {
        setInModalTemplate({
            template: 'insertEnv',
            label: 'Add new environnement'
        });
        resetSelectedDocument();
    },
    'click .mod-env-modal': (e) => {
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


const loadDocuments = (MongoCollection) => {
    return MongoCollection.find({}).fetch();
}

const removeDocument = (MongoCollection, docId) => {
    MongoCollection.remove({_id: docId}, (err) => {
        if(err) {
            console.log('Error: ' + err);
        }
    });
}

const resetInModalTemplate = () => {
    Session.set('inModalTemplate', {});
}

const resetSelectedDocument = () => {
    Session.set('selectedDocument', {});
}

const setSelectedDocument = (docId) => {
    Session.set('selectedDocument', {
        _id: docId,
    });
}

const getSelectedDocumentId = () => {
    let _selected = Session.get('selectedDocument');
    if (_selected !== undefined) {
        return docId = _selected._id ? _selected.id : undefined;
    } else {
        return undefined;
    }
}

const setInModalTemplate = (settings) => {
    Session.set('inModalTemplete', settings);
}

const getDocumentById = (MongoCollection, docId) => {
    return MongoCollection.findOne({_id: docId});
}

