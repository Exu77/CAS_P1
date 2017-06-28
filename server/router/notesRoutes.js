const express = require('express');
const router = express.Router();
const noteCtrl = require('../controller/notesCtrl');


router.get('/', noteCtrl.getAllNote);
router.get("/:id/", noteCtrl.getNote);
router.post('/', noteCtrl.upsertNote);
//router.delete('/:id/', noteCtrl.deleteNote);

module.exports = router;
