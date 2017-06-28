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
    notesStore.get(req.params.id, (err, result) => {
        stdReturn(result, res);
    });
};



module.exports.getAllNote = function(req, res) {
    notesStore.getAll((err, result) => {
        stdReturn(result, res);
    });
};

module.exports.upsertNote = function(req, res) {
    let exists = false;
    notesStore.upsert(req.body, (err, result) => {
        stdReturn(result, res);
    });
};

module.exports.deleteNote = function(req, res) {
    notesStore.remove(req.body.id, (err, result) => {
        stdReturn(result, res);
    })
};
