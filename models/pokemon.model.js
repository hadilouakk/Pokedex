import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const Pokemon = sequelize.define("Pokemon", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  level: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
});
