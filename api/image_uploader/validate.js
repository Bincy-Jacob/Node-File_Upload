const Joi = require('joi');

const validateImage = async (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    image: Joi.required().custom((value, helpers) => {
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (!allowedTypes.includes(value.mimetype)) {
        return helpers.error(
          'Invalid image type. Only JPEG, PNG, and GIF are allowed.'
        );
      }
      return value;
    }),
  });
  try {
    req.body = await schema.validateAsync(req.body);
    next();
  } catch (err) {
    res.json(err.message);
  }
};

module.exports = {
  validateImage,
};
