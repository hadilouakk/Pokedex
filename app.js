import express from "express";
import cors from "cors";
import { sequelize } from "./config/database.js";
import pokemonRoutes from "./routes/pokemon.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/pokemons", pokemonRoutes);

if (process.env.NODE_ENV !== "test") {
  sequelize
    .sync({ alter: true })
    .then(() => console.log("Base de données synchronisée"))
    .catch((err) => console.error("Erreur DB :", err));
}
export default app;
