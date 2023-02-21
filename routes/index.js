var express = require('express');
var router = express.Router();
const imageRoutes = require('../api/image_uploader/index');
const fileRoutes = require('../api/file_uploader/index');
const multipleRoutes = require('../api/multipleFile/index');

router.use('/image', imageRoutes);
router.use('/file', fileRoutes);
router.use('/multiple', multipleRoutes);

module.exports = router;
