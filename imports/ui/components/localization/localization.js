import { collections } from '../../../datastructure/datastructure.js';
import { Template } from 'meteor/templating';
import SimpleSchema from 'simpl-schema';
import '../../modal/modal.js';
import './localization.html';
import { setInModalTemplate, loadDocuments, removeDocument, resetSelectedDocument, resetInModalTemplate, setSelectedDocument, getDocumentById } from '../../../api/client/actions.js';


let _collection = collections.localizations;

SimpleSchema.extendOptions(['autoform']);


Template.insertLocalization.helpers({
    'getMongoObject': () => {
        return _collection;
    }
});

Template.updateLocalization.helpers({
    'getMongoObject': () => {
        return _collection;
    },
    'selectedDocument': () => {
        return _collection.findOne({_id: Session.get('selectedDocument')._id});
    }
});

Template.detailsLocalization.helpers({
    'selectedDocument': () => {
        return getDocumentById(_collection, FlowRouter.getParam('_id'));
    },
    'modalLabel': () => {
        return "Localization";
    }
});

Template.detailsLocalization.events({
    'click .mod-item': (e) => {
        setInModalTemplate({
            template: 'updateLocalization',
            label: 'Update localization'
        });
        setSelectedDocument(e.target.id);
    },
});

Template.localizations.helpers({
    'loadCollection': () => {
        return loadDocuments(_collection);
    },
    'rootPath': () => {
        return "/localization/detail/";
    }
});

Template.localizations.events({
    'click .btn-remove': (e) => {
        removeDocument(_collection, e.target.id);
    },
    'click .add-new-item': (e) => {
        setInModalTemplate({
            template: 'insertLocalization',
            label: 'Add new localization'
        });
        resetSelectedDocument();
    },
    'click .mod-item': (e) => {
        setInModalTemplate({
            template: 'updateLocalization',
            label: 'Update localization'
        });
        setSelectedDocument(e.target.id);
    },
    'click .details-env-modal': (e) => {
        resetInModalTemplate();
        setSelectedDocument(e.target.id);
    }
});

