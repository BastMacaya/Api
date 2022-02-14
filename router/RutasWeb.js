const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const salt = 10;
const conexion = require('../conection/conector')

/*Ruta inicial devuelve string*/
router.get("/", (req, res) => {
  res.send("Hello World");
});

/*Login*/
router.post("/ingresar", (req, res) => {
  const { username, password } = req.body;
//  bcrypt.hash(password, salt, function(err, hash) {
//    bcrypt.genSalt(salt, function(err, salt) {
//  });
//});
  respuesta(username,password).then((resolve) => {
    res.send(resolve);
  });
});

function respuesta(u,p){
  return new Promise((resolve,reject)=>{
    conexion.query("Select id_usuarios,email,passwrd from usuarios where email =  ? ",[u],(err,result)=>{
      if (err) throw reject(err.message);
      else {
        const {id_usuarios, email,passwrd} = result[0];
        bcrypt.compare(p,passwrd,(err,result) =>{
          if(err) {
            return resolve(result)
          } else {
            if (result) {

              return resolve(result)
            }
          }
        })
      };
    })
  })
};

module.exports = router;
