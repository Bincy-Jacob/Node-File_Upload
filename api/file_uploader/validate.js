const Joi = require('joi');

const validateImage = async (req, res, next) => {
  const schema = Joi.object({});
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
