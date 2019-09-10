const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");	
const app = express();

//import routers
const pagoRoute = require('./router/pago-router');

//settings
app.set('port',process.env.PORT || 3000);
app.use(cors());

//middlewares
app.use(morgan('dev')); 


var doesNotModifyBody = function(request, response, next) {
  request.params = {
    a: "b"
  };
  // calls next because it hasn't modified the header
  next();
};

// middleware that modify the response body
var doesModifyBody = function(request, response, next) {
  response.setHeader("Content-Type", "application/json");
  response.end();
  // doesn't call next()
};


app.use(express.urlencoded({extended:false}));

//routes
app.use('/api/pago',pagoRoute);

app.use(doesNotModifyBody);
app.use(doesModifyBody);

//static files (img,javascript,css ,...)
app.set(express.static(path.join(__dirname,'public')));

//start serve
app.listen(3000, () =>{
	console.log("Serve up");
});