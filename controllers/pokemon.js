const express = require('express');
const router = express.Router();
const Pokemon = require('../models/pokemon');

//INDEX //GET  //pokemons
router.get('/', (req, res, next) => {
  // Your Pokemon route login goes here
  Pokemon.find()
    .then((pokemons) => res.json(pokemons))
    .catch(next);
});

//Show
// Get /pokemons/:id
router.get('/:id', (req, res, next) => {
  const id = req.params.id
  Pokemon.findById(id)
    .then((pokemon) => res.json(pokemon))
    .catch(next);
});


//Create
//Post /pokemon
router.post('/', (req, res, next) => {
  const pokemonData = req.body
  Pokemon.create(pokemonData)
    .then((pokemon)=> res.status(201).json(pokemon))
    .catch(next);
})


//Update
//Patch /pokemon/:id
router.patch('/:id', (req, res, next) => {
  const id = req.params.id
  const pokemonData = req.body
  Pokemon.findOneAndUpdate({_id: id}, pokemonData, {new:true})
    .then((pokemon) => res.json(pokemon))
    .catch(next);
});



//Delete
// /pokemon/:id
router.delete('/:id', (req, res, next) => {
  const id = req.params.id
  Pokemon.findOneAndDelete({_id: id})
    .then(() => res.sendStatus(204))
    .catch(next);
})

module.exports = router;