const config = require('../config.json');
const express = require('express');
const router = express.Router();
const userService = require('./../services/users.service');

router.get('/users', getAll);
module.exports = router;

function getAll(req, res) {
    userService.getAll()
        .then(function (users) {
            res.send(users);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}