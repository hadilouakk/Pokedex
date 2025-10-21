import express from "express";
import {
  createPokemon,
  getPokemons,
  getPokemonById,
  patchPokemon,
  deletePokemon,
  getPokemonsByType,
} from "../controllers/pokemon.controller.js";
import { getWeatherWithPokemon} from "../controllers/weather.controller.js";

const router = express.Router();

router.post("/", createPokemon);
router.get("/all", getPokemons);
router.get("/:id", getPokemonById);
router.patch("/:id", patchPokemon); 
router.delete("/:id", deletePokemon);
router.get("/type/:type", getPokemonsByType);
router.get("/weather/:city", getWeatherWithPokemon);

export default router;
