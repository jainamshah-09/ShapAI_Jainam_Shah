const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){
	res.sendfile("index.html");
}); //here by making "F" smaller in sendfile it worked.


app.post("/", function(req, res){
	var n1 = Number(req.body.num1);
	var n2 = Number(req.body.num2);
	var result = n1/(n2*n2);
	res.json("The Answer is " + result);
});

app.listen(3000, function(){
	console.log("Server has startedon port 3000");
});

