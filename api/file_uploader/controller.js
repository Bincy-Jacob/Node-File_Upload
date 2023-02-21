const Image = require('../../models/image');

exports.fileUploade = async (req, res, next) => {
  try {
    console.log(req.file.mimetype);
    if (
      req.file.mimetype == 'application/doc' ||
      req.file.mimetype == 'application/pdf'
    ) {
      if (req.file.size > 1024 * 1024 * 5) {
        return res.status(400).json({
          status: false,
          msg: ' file size must not exceed 5MB',
        });
      } else {
        const newImage = new Image({
          name: req.body.name,
          image: {
            data: req.file.buffer,
            // contentType: 'application/pdf',
          },
        });

        await newImage.save();
        res.json({
          status: true,
          msg: 'Uploaded Sucessfully',
        });
      }
    } else {
      return res.status(400).json({
        status: false,
        msg: 'Only PDF/DOC image format is allowed',
      });
    }
  } catch (error) {
    res.json({
      status: false,
      msg: error.message,
    });
  }
};

exports.getFile = async (req, res, next) => {
  Image.find({}, (err, file) => {
    if (err) {
      console.log(err);
      res.status(500).send('An error occurred', err);
    } else {
      // res.set('Content-Type', 'application/pdf');
      // console.log(file);
      // res.send(file);
      res.render('index', { images: file });
    }
  });
};
exports.getFileById = async (req, res, next) => {
  Image.findById(req.params.id, (err, file) => {
    if (err) {
      console.log(err);
      res.status(500).send('An error occurred', err);
    } else {
      res.set('Content-Type', 'application/pdf');
      console.log(file);
      res.send(file.image.data);
    }
  });
};
