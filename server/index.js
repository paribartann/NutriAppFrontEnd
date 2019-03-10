const express = require('express')
const app = express()
const port = 3001
var cors = require('cors');
var bodyParser = require('body-parser');


const databaseUtils = require("./routes/loginroutes.js");


//parse incoming requests as json
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


app.get('/', (req, res) => res.send('Hello World!'))
//enables cors
app.use(cors({
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
  }));

app.post('/register',(req,res)=>{
    console.log("Got something from client!",req.body);
    //console.log("Name",req.body.data.fname)

    databaseUtils.register(req, res);
    
})

app.post('/login',(req,res)=>{
    console.log("Got something from client!",req.body);
    
    //console.log("Name",req.body.data.fname)
    databaseUtils.login(req, res);
})

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
} );

app.listen(port, () => {
    console.log("App listening on port", port)
    databaseUtils.connect();
});