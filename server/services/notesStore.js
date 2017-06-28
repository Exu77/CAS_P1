const uuidv4 = require('uuid/v4');

const db = {};
const Datastore = require('nedb');
db.notes = new Datastore({ filename: './server/db/notes.db', autoload: true });
db.notes.loadDatabase();

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
    db.notes.find({}, aCb.callback);
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

    if (exists) {
        db.notes.update({id: obj.id}, obj, aCb.callback);
    } else {
        db.notes.insert(obj, aCb.callback);
    }
};



function get(id, callBack) {
    let aCb = new StdCallBack(callBack);
    const bla = {id};

    db.notes.find({id}, (err, result) => {
        callBack(err, result ? result[0] : null);
    });

}

function remove (id, callBack) {
    let aCb = new StdCallBack(callBack);
    db.notes.remove({id}, stdCallBack(err, anzRem, aCb.callback));
};


module.exports = {upsert, remove, get, getAll};
