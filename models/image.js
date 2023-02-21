const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const { ObjectId } = Schema.Types;

const imageSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    image: {
      data: String,
      contentType: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model('imageUploaded', imageSchema);
