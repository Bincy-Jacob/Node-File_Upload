const swaggerJsdoc = require('swagger-jsdoc');
const path = require('path');

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'File Uploads',
      version: '1.0.1',
      description: 'My API description',
      termsOfService: 'http://localhost:3000',
      contact: {
        name: 'Binzer',
        email: 'bincy@spericorn.com',
      },
    },
  },

  apis: [path.resolve(`${__dirname}../../api/image_uploader/index.js`)],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

module.exports = swaggerSpec;
