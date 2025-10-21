import { Pokemon } from "../models/pokemon.model.js";

export const createPokemon = async (req, res) => {
  try {
    const pokemon = await Pokemon.create(req.body);
    res.status(201).json(pokemon);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPokemons = async (req, res) => {
  try {
    const pokemons = await Pokemon.findAll();
    res.json(pokemons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPokemonById = async (req, res) => {
  try {
    const pokemon = await Pokemon.findByPk(req.params.id);
    if (!pokemon) return res.status(404).json({ message: "Pokémon non trouvé" });
    res.json(pokemon);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const patchPokemon = async (req, res) => {
  try {
    const pokemon = await Pokemon.findByPk(req.params.id);
    if (!pokemon) return res.status(404).json({ message: "Pokémon non trouvé" });

    await pokemon.update(req.body);
    res.json(pokemon);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deletePokemon = async (req, res) => {
  try {
    const deleted = await Pokemon.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ message: "Pokémon non trouvé" });
    res.json({ message: "Pokémon supprimé" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getPokemonsByType = async (req, res) => {
  try {
    const { type } = req.params;
    const pokemons = await Pokemon.findAll({
      where: {
        type: type,
      },
    });

    if (!pokemons.length) {
      return res.status(404).json({ message: `Aucun Pokémon de type ${type} trouvé` });
    }

    res.json(pokemons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

