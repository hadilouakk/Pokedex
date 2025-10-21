# Pokédex API

## Description

Pokedex API est une application backend développée avec Node.js, Express et Sequelize, permettant de gérer une base de données de Pokémon et d’associer des Pokémon à des conditions météorologiques via l’API OpenWeatherMap.

L’API fournit des fonctionnalités CRUD complètes pour les Pokémon, ainsi que des routes permettant de filtrer par type ou par météo.

---

## Technologies utilisées

- Node.js : runtime JavaScript pour le backend.
- Express.js : framework pour créer l’API REST.
- Sequelize : ORM pour interagir avec la base de données SQLite.
- SQLite : base de données relationnelle légère.
- Axios : pour les requêtes HTTP vers l’API météo OpenWeatherMap.
- Jest & Supertest : pour les tests unitaires et d’intégration.
- CORS : pour gérer les requêtes cross-origin.

---

## Installation

Cloner le dépôt :
```bash
git clone <url-du-depot>

## Installation des dependaces 
npm start 
##routes 
| Méthode | Route                        | Description                               |
| ------- | -------------------          | -------------------------------           |
| POST    | `/api/pokemons`              | Crée un nouveau Pokémon                   |
| GET     | `/api/pokemons/all`          | Récupère tous les Pokémon                 |
| GET     | `/api/pokemons/:id`          | Récupère un Pokémon par son ID            |
| PATCH   | `/api/pokemons/:id`          | Met à jour un Pokémon par son ID          |
| DELETE  | `/api/pokemons/:id`          | Supprime un Pokémon par son ID            |
| GET     |`/api/pokemons/type/:type`    | Récupère tous les Pokémon d’un type donné |
| Get     | `/api/pokemons/weather/:city`| Récupère la météo pour une ville et le Pokémon |

##Lancer les tests 
npm test
