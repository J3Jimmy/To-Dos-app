const catchError = require('../utils/catchError');
const ToDo = require('../models/ToDo');

const getAll = catchError(async(req, res) => {
    const toDo = await ToDo.findAll();
    return res.json(toDo);
});

const create = catchError(async(req, res) => {
    const { title, description, isCompleted } = req.body;
    const toDo = await ToDo.create({ 
        title,
        description,
        isCompleted
    });
    return res.status(201).json(toDo);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const toDo = await ToDo.findByPk(id);
    return res.json(toDo);
})

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await ToDo.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const toDo = await ToDo.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(toDo[0] === 0) return res.sendStatus(404);
    return res.json(toDo[1][0]);
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}