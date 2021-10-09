const express = require('express');
const router = express.Router();

const stuffCtrl = require('./../controllers/stuffCtrl');
const auth = require('./../middleware/auth');
const multer = require('./../middleware/multer-config');
const upload = require('../upload/upload');

//il faut que auth est devant multer pour que la requête soit authentifiée
router.post('/' ,  multer.single('images'), stuffCtrl.createThing)
router.get('/' + '', auth , stuffCtrl.getAllThings);
router.get('/:id', auth ,stuffCtrl.getOneThing);
router.put('/:id', multer.single('images') ,stuffCtrl.modifyThing);
router.delete('/:id', auth , stuffCtrl.deleteThing);
router.post('/sary', upload.upload);

module.exports = router;