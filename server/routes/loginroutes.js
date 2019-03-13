//we create mysql connection using specifying the database of choice:

var mysql = require('mysql');

var connection = mysql.createConnection(

    {
        host : 'localhost',
        user : 'root',
        password: 'database123!',
        database: 'users'

    }
);


exports.connect = () => {
    connection.connect( (err) => {
        if(!err) {
            console.log("Database is connected ...");
        }
        else
        {
            console.log("Database is not connected ...",err);
        }

    });
}

//creating handler for user registration
exports.register = (req, res) => {
    console.log("req", req.body);

    var today = new Date();
    var users = {
        "first_name":req.body.fname,
        "last_name":req.body.lname,
        "email":req.body.email,
        "password":req.body.password,
        "username":req.body.username,
        "created":today,
        "modified":today
    }

    connection.query('INSERT INTO users SET ?', users, (error, results, fields) => {

        if (error) {
            console.log("error occured", error);
            res.send( {
                    "code" : 400,
                    "failed" : "error occured"
            });
        }
        else
        {
            
            res.send({
            "code" : 200,
            "success" : "user registered sucessfully"
            });
        }
    });

}


//creating handler for user login and validating user credentials


exports.login = (req, res) => {

    var username = req.body.username;
    var password = req.body.password;

    connection.query('SELECT * FROM users WHERE username = ?', [username], (error, results, fields) => {

        if (error) {
            // console.log("error ocurred",error);
            res.send({
            "code" : 400,
            "failed" : "error ocurred"
             });
        }
         else {
            console.log('The solution is: ', results);
            if(results.length >0){
                if(results[0].password === password){
                    console.log("Login Succesful")
                    res.send({
                        "code" : 200,
                        "success" : "login sucessfull"
                    });
                    
                }
                else{
                    console.log("Login Failure")
                    res.send({
                        "code" : 204,
                        "success" : "Username and Password does not match"
                     });
                 }
            }
            else
            {
                console.log("No Account")
                res.send({
                    "code" : 205,
                    "success" : "Email does not exits"
                });
            }

        } 

    }); 
}


