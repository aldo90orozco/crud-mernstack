const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

const objetobd=mongoose.connection;

objetobd.on('connected',()=>{console.log('Conexion correcta Neo has entrado a la Matrix')});
//si hay un error
objetobd.on('error',()=>{console.log('Connection failed. Neo te caiste de la Matrix')});


//exportamos la conexion para usarla en nuestro server

module.exports=mongoose;