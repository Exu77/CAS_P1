"use strict"

class NotesStorage {

    static getAll(callBack) {
        return HttpHelper.get('/notes');
    }

    static get(id) {
        return HttpHelper.get('/notes/' + id);
    }

    static store(aItem) {
        return HttpHelper.post('/notes', aItem);
    }
}
