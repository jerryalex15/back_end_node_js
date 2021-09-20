const express = require('express');
const router = express.Router()
const stuffCtrl = require('../controllers/stuffCtrl')

router.post('/',stuffCtrl.modifyThing);
router.get('/' + '', stuffCtrl.getAllThings);
router.get('/:id', stuffCtrl.getOneThing);
router.put('/:id', stuffCtrl.modifyThing);
router.delete('/:id', stuffCtrl.deleteThing);

module.exports = router;