const mongoose = require('../db/connections');

const pokemonSchema = new mongoose.Schema(
    {
        username: { type: String, required: true },
        email: { type: String, required: true },
        favPoke: []
    },
    {
        timestamps: true,
    }
);

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;