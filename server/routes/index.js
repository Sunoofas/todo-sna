const express = require("express");
const router = express.Router();
const todo = require('../controllers/todo');


//Todo 
router.post('/todo', todo.putTask);
router.get('/todo', todo.getTask);
router.delete('/todo/:id',todo.deleteTask);


//convertor



module.exports = router;