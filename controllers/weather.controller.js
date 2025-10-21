import axios from "axios";
import { Pokemon} from "../models/pokemon.model.js"; 
import { sequelize } from "../config/database.js";

const API_KEY = "e8eead241442567eb465acb95a7d194c";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const getPokemonByWeather = async (tempCelsius, weather) => {
  let type;

  if (weather.includes("rain") || weather.includes("cloud")) {
    type = "electric"; 
  } else if (tempCelsius <= 10) {
    type = "Feu";      
  } else if (tempCelsius <= 25) {
    type = "Plante";  
  } else if (tempCelsius > 30) {
    type = "Glace";     
  } else {
    type = "Eau";    
  }
  const pokemon = await Pokemon.findOne({
    where: sequelize.where(
      sequelize.fn('lower', sequelize.col('type')),
      type.toLowerCase()
    )
  });

  return pokemon;
};

// Contrôleur principal
export const getWeatherWithPokemon = async (req, res) => {
  try {
    const { city } = req.params;

    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric",
      },
    });

    const temp = response.data.main.temp;
    const weatherMain = response.data.weather[0].main.toLowerCase();
    const pokemon = await getPokemonByWeather(temp, weatherMain);

    res.json({
      city: response.data.name,
      temperature: temp,
      weather: weatherMain,
      pokemon: pokemon || null,
    });
  } catch (error) {
    res.status(500).json({ message: error.response?.data?.message || error.message });
  }
};
