const uuidv4 = require('uuid/v4');

const db = {};
const Datastore = require('nedb');
db.notes = new Datastore({ filename: '../db/notes.db', autoload: true });

class StdCallBack {
    constructor(callback) {
        this.cb = callback;
        this.callback = (err, doc) => {
            this.cb(err, doc);
        }
    }


}

function getAll(callBack) {
    let aCb = new StdCallBack(callBack);
    let result = null;
    console.log('getAllNote');
    result = db.notes.find({}, aCb.callBack);
};

function upsert(obj, callBack) {
    let aCb = new StdCallBack(callBack);
    let exists = false;
    if (!obj.id) {
        obj.id = uuidv4();
    } else {
        if (db.notes.find({id: obj.id})) {
            exists = true;
        }
    }

    console.log('upsertNote ' + exists);
    console.log(obj);
    getAll((err, result) => {
        console.log('got it');
        console.log(result)
    });

    if (exists) {
        db.notes.update({id: obj.id}, obj, aCb.callback);
    } else {
        db.notes.insert(obj, aCb.callback);
    }
};



function get(id, callBack) {
    let aCb = new StdCallBack(callBack);
    console.log('getNote');
    db.notes.find({id}, (err, result) => {
        callBack(err, result ? result[0] : null);
    });

}

function remove (id, callBack) {
    let aCb = new StdCallBack(callBack);
    console.log('deleteNote');
    console.log(req);
    db.notes.remove({id}, stdCallBack(err, anzRem, aCb.callback));
};


module.exports = {upsert, remove, get, getAll};
