var express = require('express');
var router = express.Router();

const { imageUploade, getImage, getImageById } = require('./controller');

const { imageUpload } = require('../../middleware/imageUploader');

/**
 * @swagger
 * components:
 *   schemas:
 *     Image:
 *       type: object
 *       required:
 *         - name
 *         - image
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the image.
 *         image:
 *           type: object
 *           properties:
 *             data:
 *               type: string
 *               format: binary
 *               description: The binary data of the image.
 *             contentType:
 *               type: string
 *               description: The MIME type of the image.
 */

/**
 * @swagger
 * tags:
 *   name: Image
 *   description: Create a new image.
 * /image:
 *   post:
 *     summary: Create a new image.
 *     tags: [Image]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the image.
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: The binary data of the image.
 *     responses:
 *       200:
 *         description: The created image.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Image'
 *       500:
 *         description: Some server error
 *   get:
 *     summary: Lists all the books
 *     tags: [Image]
 *     responses:
 *       200:
 *         description: The list of the books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Image'

 */

router.route('/').get(getImage).post(imageUpload, imageUploade);
router.route('/:id').get(getImageById);
module.exports = router;
