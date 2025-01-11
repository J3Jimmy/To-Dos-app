const { getAll, create, getOne, remove, update } = require('../controllers/toDo.controllers');
const express = require('express');

const toDoRouter = express.Router();

toDoRouter.route("/")
    .get(getAll)
    .post(create)

toDoRouter.route("/:id")
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = toDoRouter;
