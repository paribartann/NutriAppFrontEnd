const express = require('express')
const app = express()
const port = 3001
var bodyParser = require('body-parser');
//parse incoming requests as json
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/register',(req,res)=>{
    console.log("Got something from client!",req.body.fname);
    //console.log("Name",req.body.data.fname)
    
})



app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
} );

app.listen(port, () => console.log(`Example app listening on port ${port}!`))