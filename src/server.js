const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/mev-database',{
    useNewUrlParser: true
})
.then(db => console.log('Base de datos conectada'))
.catch(err => console.log('La base de datos no esta conectada'));

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json()); //hace que el server entienda cuando el front tire un json

// Routes
app.use('/api', require('./routes/tasks'));

// Static files (archivos q envio al front)
app.use(express.static(__dirname + '/public'))

// Server is listening
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
})