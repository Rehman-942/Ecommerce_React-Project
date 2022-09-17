const Category = require("../models/categry");
const { errorHandler } = require("../helpers/dbErrorHandler");

const categoryById = (req, res, next, id) => {
  Category.findById(id).exec((err, category) => {
    if (err || !category) {
      return res.status(400).json({
        error: "Category doesn't exist",
      });
    }
    req.category = category;
    next();
  });
};

const create = (req, res) => {
  const category = new Category(req.body);
  category.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json({ data });
  });
};

const read = (req, res) => {
  return res.json(req.category);
};

const update = (req, res) => {
  // console.log('req.body', req.body);
  // console.log('category update param', req.params.categoryId);
  const category = req.category;
  category.name = req.body.name;
  category.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json(data);
  });
};

const remove = (req, res) => {
  const category = req.category;
  category.remove((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json({
      message: "Category deleted",
    });
  });
};

const list = (req, res) => {
  Category.find().exec((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json(data);
  });
};
module.exports = {
  create,
  categoryById,
  read,
  update,
  remove,
  list,
};
