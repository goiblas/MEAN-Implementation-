const express = require('express');
const cors = require('cors');
const path = require('path');
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

const secure = require('./services/secure.service');

// router
const viewRouter = require('./controllers/view.controller');
const usersApiRouter = require('./controllers/users.controller');
const taskApiRouter = require('./controllers/api/tasks.controller');
const privateTaskApiRouter = require('./controllers/api/privTasks.controller');
const userRouter = require('./controllers/users.controller');

app.use(viewRouter);
app.use('/api', usersApiRouter);
app.use('/api/tasks', taskApiRouter);
app.use('/api/prt', secure.secureRouter);
app.use('/api/prt/tasks', privateTaskApiRouter);
app.use('/users', userRouter);

// start server
const port = process.env.NODE_ENV === 'production' ? 80 : 4000;
app.listen(port, function () {
    console.log('Server listening on port ' + port);
});