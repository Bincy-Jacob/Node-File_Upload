var express = require('express');
var router = express.Router();

const { fileUpload, getFile, getDataById } = require('./controller');

const { multipleFileUpload } = require('../../middleware/imageUploader');

router.route('/').get(getFile).post(multipleFileUpload, fileUpload);
router.route('/:id').get(getDataById);

module.exports = router;
