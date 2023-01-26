const express = require('express');
const itemController = require('../controllers/itemController');
const authController = require('../controllers/authController');

const router = express.Router();

router.get('/', itemController.getItems, (req, res) => {
  res.status(200).json(res.locals.allItems);
});

router.post('/', authController.authorizeRole, itemController.postItem, (req, res) => {
  res.status(200).json(res.locals.item);
});

router.patch('/:id', authController.authorizeRole, itemController.updateItem, (req, res) => {
  res.status(200).json(res.locals.item);
});

module.exports = router;