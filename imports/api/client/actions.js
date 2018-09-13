

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

export const setInModalTemplate = (settings) => {
    Session.set('inModalTemplete', settings);
}

export const getDocumentById = (MongoCollection, docId) => {
    return MongoCollection.findOne({_id: docId});
}

