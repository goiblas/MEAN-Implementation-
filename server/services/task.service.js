const config = require('../config.json');
const mongoose = require('mongoose');
const db = mongoose.connect(config.connectiondb);
const Task = require('../models/task.model');

function getAll() {
    return Task.find({}).exec();
}
function addTask(task) {
    const newTask = new Task({
        title: task.title,
        done: task.done
    });
    return newTask.save();
}
function deleteTask(taskId) {
    return Task.findByIdAndRemove(taskId);
}
function completeTask(taskId) {
    return Task.findByIdAndUpdate(taskId, {done: true});
}
module.exports = {
    getAll: getAll,
    addTask: addTask,
    deleteTask: deleteTask,
    completeTask: completeTask
}