const config = require('../config.json');
const express = require('express');
const router = express.Router();
const userService = require('./../services/users.service');
const secure = require('./../services/secure.service');

router.get('/', getAll);
router.post('/login', loginUser);
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
function loginUser(req, res) {
    const email = req.body.email;
    userService.getAll().then(
        users => {
            let validUser = false;
            for(let i = 0; i < users.length; i++) {
                if(users[i].email === email) {
                    console.log('usuario encontrado');
                    const token = secure.generateToken(users[i].name);
                    res.send({token: token});
                    validUser = true;
                    break;
                }
            }
            if(!validUser) {
                res.status(500).send({error: "user no found"})
            }
        }
    ).catch(err => {
        res.status(500).send({error: 'error ....'});
    })
}