const express=require('express');
const app=express();
const puerto=5000;
//Importamos conexion de mongodb
const archivoBD=require('./conexion');
//importacion archivo de rutas y modelo usuario
const rutausuario=require('./rutas/usuario');
//Impoirtar body parcer
const bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:'true'}))

app.use('/api/usuario',rutausuario);
//metodo get. la '/' es la pagina de inicio
app.get('/',(req,res)=>{
    res.end('Bienvenido al servidor backend node');
})
//configurar servidor

app.listen(puerto,()=>{
    console.log(`Wake up Neo the server is running on port ${puerto} follow the white rabbit`);
});
