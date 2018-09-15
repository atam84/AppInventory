import { collections } from '../../../datastructure/datastructure.js';
import { Template } from 'meteor/templating';
import SimpleSchema from 'simpl-schema';
import '../../modal/modal.js';
import './os.html';
import { setInModalTemplate, loadDocuments, removeDocument, resetSelectedDocument, resetInModalTemplate, setSelectedDocument, getDocumentById } from '../../../api/client/actions.js';


let _collection = collections.os;

SimpleSchema.extendOptions(['autoform']);


Template.insertOs.helpers({
    'getMongoObject': () => {
        return _collection;
    }
});

Template.updateOs.helpers({
    'getMongoObject': () => {
        return _collection;
    },
    'selectedDocument': () => {
        return _collection.findOne({_id: Session.get('selectedDocument')._id});
    }
});

Template.detailsOs.helpers({
    'selectedDocument': () => {
        return getDocumentById(_collection, FlowRouter.getParam('_id'));
    },
    'modalLabel': () => {
        return "Operating system";
    }
});

Template.detailsOs.events({
    'click .mod-item': (e) => {
        setInModalTemplate({
            template: 'updateOs',
            label: 'Update OS'
        });
        setSelectedDocument(e.target.id);
    },
});

Template.operatingSystems.helpers({
    'loadCollection': () => {
        return loadDocuments(_collection);
    },
    'rootPath': () => {
        return "/operating-system/detail/";
    }
});

Template.operatingSystems.events({
    'click .btn-remove': (e) => {
        removeDocument(_collection, e.target.id);
    },
    'click .add-new-item': (e) => {
        setInModalTemplate({
            template: 'insertOs',
            label: 'Add new OS'
        });
        resetSelectedDocument();
    },
    'click .mod-item': (e) => {
        setInModalTemplate({
            template: 'updateOs',
            label: 'Update OS'
        });
        setSelectedDocument(e.target.id);
    }
});

