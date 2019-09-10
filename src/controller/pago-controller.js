const controller = {};
var Openpay = require('../../lib/openpay');

/*Sandbox*/
var openpay = new Openpay('', '');
openpay.setTimeout(10000);

controller.tarjeta=(req,res)=>{

  const data = req.body;
  openpay.charges.create(data, function (error, body, response){
  	console.log(data);
  	res.json({"mensage":"pago tarjeta","status":true});
  });
}

module.exports = controller;