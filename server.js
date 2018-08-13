'use strict'

const express = require('express');
const app = express();

const hbs = require('hbs');


// comandos para mostrar los servicios de la pagina web que se encuentran en la carpeta de PUBLIC
app.use(express.static(__dirname + '/public'));


// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
// renderiza los archivos HBS
app.set('view engine', 'hbs');


// helpers, un gelper es una funcion que se dispara cuando el template lo requiere!
hbs.registerHelper('getanio',()=>{
    return new Date().getFullYear();
});


app.get('/home', (req, res)=>{

   res.render('home',{
       nombre: 'Gonzalo Espinoza'
    
   });
});


app.get('/about', (req, res)=>{

    res.render('about',{
        nombre: 'Gonzalo Espinoza'
    });
 });

app.listen(3000, (req, res)=>{
    console.log('api-rest corriendo en http://192.168.1.7:3000')
});


