const router = require('express').Router();
const taskService = require('../../services/task.service');

router.get('/', getAllTask);
router.post('/', addTask);
router.delete('/:id', deleteTask);
router.put('/:id/done', completeTask);

module.exports = router;

function completeTask( req, res) {
    taskService.completeTask(req.params.id).then( updatedTasks => {
        res.send(updatedTasks);
    }).catch(err=> {
        res.status(500).send({error: "Could not complete task"})
    });
}
function deleteTask (req, res) {
    taskService.deleteTask(req.params.id).then( updatedTasks => {
        res.send(updatedTasks);
    }).catch(err=> {
        res.status(500).send({error: "Could not remove task"})
    });
}
function getAllTask( req, res) {
    taskService.getAll().then( tasks => {
        res.send(tasks);
    }).catch(err => {
        res.status(500).send({error: "Could not fetch Tasks"})
    });
}

function addTask(req, res) {
    taskService.addTask(req.body).then( savedTask => {
        res.send(savedTask);
    }).catch( err => {
        res.status(500).send({error: "Could not save Task"})
    });
}