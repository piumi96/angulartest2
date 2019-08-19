const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const http = require('http').createServer(app);
app.use(bodyParser.json());

app.post('/api/auth', (req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    if(username=="admin" && password=="admin"){
        console.log("Login Successful");
        res.json({
            success: true,
            message: "Login Successful"
        });
    }
    else{
        console.log("Invalid authentication");
        res.json({
            success: false,
            message: "Invalid Authentication"
        });
    }
})


http.listen(3000, () => {
    console.log("Server running");
} )