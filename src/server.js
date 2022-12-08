require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const corsOptions = require('../src/config/corsOptions');
const { logger } = require('../src/middleware/logEvents');
const errorHandler = require('../src/middleware/errorHandler');
const verifyJWT = require('../src/middleware/verifyJWT');
const cookieParser = require('cookie-parser');
const credentials = require('../src/middleware/credentials');
const mongoose = require('mongoose');
const connectDB = require('../src/config/dbConn');
const PORT = process.env.PORT || 3500;

console.log(process.env.NODE_ENV)

// Connect to MongoDB

connectDB();

// custom middleware logger
app.use(logger);

// Handle options credentials check - before CORS!
// and fetch cookies credentials requirements
app.use(credentials);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json 
app.use(express.json());

// middleware for cookies
app.use(cookieParser());

//serve static files
app.use('/', express.static(path.join(__dirname, '/public')));

// routes
app.use('/', require('../src/routes/root'));
app.use('/register', require('../src/routes/register'));
app.use('/auth', require('../src/routes/auth'));
app.use('/refresh', require('../src/routes/refresh'));
app.use('/logout', require('../src/routes/logout'));
app.use('/empleado', require('../src/routes/empleado.route'));
app.use('/gasto', require('../src/routes/gasto'));
app.use('/inventario', require('../src/routes/inventario'));
app.use('/maquinaria', require('../src/routes/maquinaria.route'));
app.use('/marca', require('./routes/marca'));


app.use(verifyJWT);
app.use('/employees', require('../src/routes/api/employees'));

app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    } else if (req.accepts('json')) {
        res.json({ "error": "404 Not Found" });
    } else {
        res.type('txt').send("404 Not Found");
    }
});

app.use(errorHandler);

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})

mongoose.connection.on('error', err => {
    console.log(err)
    logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log')
})