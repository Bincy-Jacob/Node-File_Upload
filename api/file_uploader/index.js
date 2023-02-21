var express = require('express');
const { fileUploade, getFile, getFileById } = require('./controller');

const {} = require('./validate');

var router = express.Router();

const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

router.route('/').get(getFile).post(upload.single('file'), fileUploade);
router.route('/:id').get(getFileById);
module.exports = router;
