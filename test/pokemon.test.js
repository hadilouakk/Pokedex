import request from "supertest";
import app from "../app.js";

describe("Pokémon API - Tests complets", () => {
  let createdPokemonId; 


  it("POST /api/pokemons doit créer un nouveau Pokémon", async () => {
    const newPokemon = { name: "Pikachu", type: "Électrik", level: 5 };
    const res = await request(app).post("/api/pokemons").send(newPokemon);

    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe("Pikachu");
    expect(res.body.type).toBe("Électrik");

    createdPokemonId = res.body.id; 
  });


  it("GET /api/pokemons/all doit retourner un tableau", async () => {
    const res = await request(app).get("/api/pokemons/all");

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThanOrEqual(1);
  });

  
  it("GET /api/pokemons/:id doit retourner un Pokémon spécifique", async () => {
    const res = await request(app).get(`/api/pokemons/${createdPokemonId}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.id).toBe(createdPokemonId);
    expect(res.body.name).toBe("Pikachu");
  });

  
  it("PATCH /api/pokemons/:id doit modifier un Pokémon", async () => {
    const res = await request(app)
      .patch(`/api/pokemons/${createdPokemonId}`)
      .send({ level: 10 });

    expect(res.statusCode).toBe(200);
    expect(res.body.level).toBe(10);
  });


  it("GET /api/pokemons/type/:type doit retourner les Pokémon par type", async () => {
    const res = await request(app).get("/api/pokemons/type/Électrik");

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body[0].type).toBe("Électrik");
  });


  it("GET /api/pokemons/weather/:city doit retourner la météo avec Pokémon", async () => {
    const res = await request(app).get("/api/pokemons/weather/Paris");

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("city");
    expect(res.body).toHaveProperty("temperature");
    expect(res.body).toHaveProperty("weather");
    expect(res.body).toHaveProperty("pokemon");
  });

 
  it("DELETE /api/pokemons/:id doit supprimer un Pokémon", async () => {
    const res = await request(app).delete(`/api/pokemons/${createdPokemonId}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toMatch(/supprimé/i);
  });
});
