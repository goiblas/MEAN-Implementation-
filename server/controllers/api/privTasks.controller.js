const router = require('express').Router();
const taskService = require('../../services/task.service');

module.exports = router.get('/', (req, res) => {
    taskService.getAll().then( tasks => {
        res.send(tasks);
    }).catch(err => {
        res.status(500).send({error: "Could not fetch Tasks"})
    });
});