const express = require('express');

const router = express.Router();

const { helloController, getTodos, createTodo } = require('../controllers/index.controller');

// Hello Routes
router.get('/hello', helloController);

// Todos Routes
router.get('/todos', getTodos);
router.post('/todos', createTodo);

module.exports = router; 