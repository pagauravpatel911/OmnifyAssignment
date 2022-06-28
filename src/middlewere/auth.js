
const validator = require('../validator/validator');
const jwt = require("jsonwebtoken");

let authorization = async function (req, res, next) {
 try{
 


  let token = req.headers["x-api-key"]
  if(!token) {return res.status(400).send({Status:false, msg:"Token must be present"})}

  let decodedToken = jwt.verify(token, 'Group38')
  if(!decodedToken) {return res.status(400).send({status:false, msg:"Invalid token id"})}
    

 if(userId=req.body.userId){
  if(decodedToken.userId != req.body.userId) return res.status(400).send({status:false, msg:"You are not authorised user"})
 }
  
 

  

  
  next();
}catch (err) {
    console.log("This is the error :", err.message);
    return res.status(500).send({ msg: "Error", error: err.message });
  }
};

module.exports.authorization = authorization;
