

export const loadDocuments = (MongoCollection) => {
    return MongoCollection.find({}).fetch();
}

export const removeDocument = (MongoCollection, docId) => {
    MongoCollection.remove({_id: docId}, (err) => {
        if(err) {
            console.log('Error: ' + err);
        }
    });
}

export const resetInModalTemplate = () => {
    Session.set('inModalTemplate', {});
}

export const resetSelectedDocument = () => {
    Session.set('selectedDocument', {});
}

export const setSelectedDocument = (docId) => {
    Session.set('selectedDocument', {
        _id: docId,
    });
}

export const getSelectedDocumentId = () => {
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

export const getDocumentById = (MongoCollection, docId) => {
    return MongoCollection.findOne({_id: docId});
}

const __setInModalTemplateAction = (_action, _setupObject) => {
    setInModalTemplate({
        template: _setupObject[_action].template,
        label: _setupObject[_action].label
    });
    setSelectedDocument(_setupObject.target);
}

export const setInModalTemplateActionAdd = (_setupObject) => {
    __setInModalTemplateAction("insert", _setupObject);
}

export const setInModalTemplateActionMod = (_setupObject) => {
    __setInModalTemplateAction("update", _setupObject);
}
