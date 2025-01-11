const express = require('express');
const toDoRouter = require('./toDo.router');
const router = express.Router();

// colocar las rutas aquí
router.use(toDoRouter);

module.exports = router;