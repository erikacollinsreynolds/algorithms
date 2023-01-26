// import pool query object as db
const db = require('../models/ItemModel');

module.exports = {
  postItem: async (req, res, next) => {
    try {
      // auth check
      if (res.locals.role !== 'seller') {
        res.locals.item = 'Buyer cannot list items';
        return next();
      } 
      // retrieve new item data from req
      const { description, price } = req.body;
      // create query string
      const queryStr = `
        INSERT INTO items
        (description, price, purchased)
        VALUES ($1, $2, false)
        RETURNING *`;

      const response = await db.query(queryStr, [description, price]);
      res.locals.item = response.rows[0];

      return next();
    } catch (err) {
      return next(err);
    }
  },

  getItems: async (req, res, next) => {
    try {
      const queryStr = 'SELECT * FROM items';
      const response = await db.query(queryStr);
      res.locals.allItems = response.rows;

      return next();
    } catch(err) {
      return next(err);
    }
  },

  updateItem: async (req, res, next) => {
    try {
      // auth check
      if (res.locals.role !== 'buyer') {
        res.locals.item = 'Seller cannot purchase items';
        return next();
      }
      // retrieve id from param
      const { id } = req.params;
      const queryStr = `
      UPDATE items
      SET purchased = true
      WHERE item_id = $1
      RETURNING *`;

      const response = await db.query(queryStr, [id]);
      res.locals.item = response.rows[0];

      return next();
    } catch(err) {
      return next(err);
    }
  }
};
