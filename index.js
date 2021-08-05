// CONFIG
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 4000;

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Redirect
app.get('/', (req, res) => {
    res.redirect('/pokemon')
});

// Route for recipe
const pokemonController = require ('./controllers/pokemon.js');
app.use('/pokemon', pokemonController);

// START SERVER
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});