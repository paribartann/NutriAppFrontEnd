var express = require("express");
var login = require('./routes/loginroutes');
var bodyParser = require('body-parser');


var app = express();

//parse incoming requests as json
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());



//server to serve cross domain requests
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
} );

var router = express.Router();

//test route
router.get('/', (req, res) => {
    res.json({message: 'Welcome!'});
});

//using built in router from express for handling api requests
//route to handle user registration
router.post('/register', login.register);
router.post('/login', login.login);
app.use('/api', router);
app.listen(5000);


