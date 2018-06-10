const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const config = require('./config.json');
const app = express();


// rederizado de vistas html
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// servidor de estaticos
app.use(express.static(path.join (__dirname, 'static')));

// api 
app.use(cors());
app.use(express.json());
// envio de datos desde formulario
app.use(express.urlencoded({ extended: false }));

// use JWT auth to secure the api, the token can be passed in the authorization header or querystring
// app.use(expressJwt({
//     secret: config.secret,
//     getToken: function (req) {
//         if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
//             return req.headers.authorization.split(' ')[1];
//         } else if (req.query && req.query.token) {
//             return req.query.token;
//         }
//         return null;
//     }
// }).unless({ path: ['/users/authenticate', '/users/register'] }));

// router
const viewRouter = require('./controllers/view.controller');
const usersApiRouter = require('./controllers/users.api.controller');
const taskApiRouter = require('./controllers/api/tasks.controller');
app.use(viewRouter);
app.use('/api', usersApiRouter);
app.use('/api/tasks', taskApiRouter);


// start server
const port = process.env.NODE_ENV === 'production' ? 80 : 4000;
app.listen(port, function () {
    console.log('Server listening on port ' + port);
});