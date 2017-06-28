"use strict";
"use_strict";
let notesStore = require('../services/notesStore');

function stdReturn(result, res) {
    res.format({
        'application/json': function(){
            res.json(result);
        }
    });
}

module.exports.getNote = function(req, res) {
    console.log('getNote ' + req.params.id);
    notesStore.get(req.params.id, (err, result) => {
        stdReturn(result, res);
    });
};



module.exports.getAllNote = function(req, res) {
    const id = req.query['id'];
    let fn = notesStore.getAll;
    console.log('getAllNote');
    console.log(id)
    if (id) {
        notesStore.get(id, (err, result) => {
            stdReturn(result, res);
        });
    } else {
        notesStore.getAll((err, result) => {
            stdReturn(result, res);
        });
    }

};

module.exports.upsertNote = function(req, res) {
    let exists = false;
    console.log('ctrl upsert')
    notesStore.upsert(req.body, (err, result) => {
        stdReturn(result, res);
    });
};

module.exports.deleteNote = function(req, res) {
    console.log('deleteNote');
    notesStore.remove(req.body.id, (err, result) => {
        stdReturn(result, res);
    })
};
