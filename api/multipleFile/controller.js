const MultipleFile = require('../../models/multipleFiles');
const fs = require('fs');

exports.fileUpload = async (req, res, next) => {
  try {
    let File = [];
    req.files.map(
      (e) =>
        (File = [
          ...File,
          {
            path: e.path,
            contentType: e.mimetype,
          },
        ])
    );

    const newFile = new MultipleFile({
      name: req.body.name,
      image: File,
    });

    await newFile.save();
    res.json({
      status: true,
      msg: 'Uploaded Sucessfully',
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      msg: error.message,
    });
  }
};

exports.getFile = async (req, res, next) => {
  Image.find({}, (err, images) => {
    if (err) {
      console.log(err);
      res.status(500).send('An error occurred', err);
    } else {
      console.log(images);
      res.render('index', { images });
      // res.set('Content-Type', 'image/png');
      // console.log(images);
      // res.send(images[0].image.data);
    }
  });
};

exports.getDataById = async (req, res, next) => {
  let data = await MultipleFile.findById(req.params.id);
  // console.log(data);
  let out = {
    name: data.name,
    images: data.image.map((e) => e.path),
  };
  res.send(out);
};
