const db = require('./config/database');
// pour permettre la communication entre le front et le back en dev.
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const CityRoutes = require('./routes/city.routes');
const forecastRouter = require('./routes/forecast.route');

// Initialisation de la base avec les deux tables nécessaires (à garder)
db.init();

// dans le cas où le front est fait en js natif, voici une ligne de commande à ajouter pour servir le front à partir du projet node
// si vous faîtes du VueJS ou du React ce n'est pas nécessaire
// dans ce cas il n'est pas nécessaire d'utiliser la partie cors (ligne 6 à 8)
//app.use('/', express.static('../../front/'));

const app = express();

app.use(bodyParser.json());

app.use(cors({
    credentials: true
}));

app.use(CityRoutes);
app.use(forecastRouter);

app.get('/home', (req, res) => {
    res.send('lrhor');
});

const PORT = 3001;

app.listen(PORT, ()=> {
    console.log('listen to port', PORT);
});

