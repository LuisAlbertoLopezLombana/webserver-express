const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));


// Express HBS engine
hbs.registerPartials(__dirname + '/views/partials', function(err) {});
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'luis lopez'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});


// app.get('/', (req, res) => {
//     let salida = {
//         nombre: 'Luis Alberto',
//         edad: 32,
//         url: req.url
//     };

//     res.send(salida)
//         // res.send('Hola Mundo!');
// });

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});