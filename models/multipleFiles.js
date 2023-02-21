const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const { ObjectId } = Schema.Types;

const fileSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    image: [
      {
        path: String,
        contentType: String,
      },
    ],
  },

  {
    timestamps: true,
  }
);

module.exports = model('multiple_file', fileSchema);
