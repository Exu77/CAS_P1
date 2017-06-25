"use strict"

class NotesStorage {

    static getAll(callBack) {
        return HttpHelper.get('/notes');
    }

    static get(id) {
        return HttpHelper.get('/notes?id=' + id);
    }

    static store(aItem) {
        console.log('store')
        console.log(aItem)
        return HttpHelper.post('/notes', aItem);
    }
}
