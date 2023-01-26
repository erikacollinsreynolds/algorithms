const express = require('express')

const { getItems, postItem, updateItem } = require('./controllers/itemController')

const { authCheck } = require('./controllers/authController')

const api = express();

//Get Route
api.get('/', getItems, (req, res) => {
  return res.status(200).json(res.locals.response)
})

//Post Route
api.post('/', authCheck, postItem, (req, res) => {
  return res.status(200).json(res.locals.response)
})

//Update Route
api.patch('/:id', authCheck, updateItem, (req, res) => {
  return res.status(200).json(res.locals.response)
})


module.exports = api;