const Image = require('../../models/image');
const fs = require('fs');

exports.imageUploade = async (req, res, next) => {
  try {
    const newImage = new Image({
      name: req.body.name,
      image: {
        data: req.file.path,
        contentType: 'image/png',
      },
    });

    await newImage.save();
    res.json({
      status: true,
      msg: 'Uploaded Sucessfully',
    });
  } catch (error) {
    res.json({
      status: false,
      msg: error.message,
    });
  }
};

exports.getImage = async (req, res, next) => {
  Image.find({}, (err, images) => {
    if (err) {
      console.log(err);
      res.status(500).send('An error occurred', err);
    } else {
      res.json(images);
      // console.log(images);
      // res.render('index', { images });
      // res.set('Content-Type', 'image/png');
      // console.log(images);
      // res.send(images[0].image.data);
    }
  });
};

exports.getImageById = async (req, res, next) => {
  let data = await Image.findById(req.params.id);
  let image = data.image.data;
  fs.readFile(image, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end(err.message);
      return;
    }
    res.set('Content-Type', 'image/png');
    res.send(data);
  });
};
