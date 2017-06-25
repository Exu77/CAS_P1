var notesStore = require('../services/notesStore');

function stdReturn(result, res) {
    res.format({
        'application/json': function(){
            res.json(result);
        }
    });
}

module.exports.getNote = function(req, res) {
  notesStore.get(req.body.id, (err, result) => {
      stdReturn(result, res);
  });
};



module.exports.getAllNote = function(req, res) {
    let result = null;
    console.log('getAllNote');
    console.log(req);
    notesStore.getAll((err, result) => {
        stdReturn(result, res);
    })

};

module.exports.upsertNote = function(req, res) {
    let exists = false;
    console.log(req);
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
