import React, { useEffect, useState } from "react";

const ExpenseItem = ({ icon, name, type, statName, statValue }) => (
  <div className="expense-item">
    <div className="expense-details">
      <img src={icon} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{`${type} • ${statName}: ${statValue}`}</p>
      </div>
    </div>
  </div>
);

const MainContent = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const pokemonNames = ["pikachu", "charizard", "bulbasaur", "venusaur", "onix"];
      const fetchedData = await Promise.all(
        pokemonNames.map(async (name) => {
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
          const data = await res.json();
          return {
            name: data.name,
            icon: data.sprites.front_default,
            type: data.types[0].type.name,
            statName: data.stats[1].stat.name,
            statValue: data.stats[1].base_stat,
          };
        })
      );
      setPokemonData(fetchedData);
    };

    fetchPokemon();
  }, []);

  return (
    <div className="main-content">
      <div className="header">
        <div>
          <h1>Pokémon Stats</h1>
          <p>Power Comparison</p>
        </div>
        <img
          src="https://dashboard.codeparrot.ai/api/image/Z9Bt0ed_tb-16vI0/users.png"
          alt="users"
        />
      </div>
      <div className="stats-chart">
        <div 
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "200px",
            alignItems: "flex-end",
            paddingBottom: "0px", 
          }}
        >
          {Array.from({ length: 10 }).map((_, index) => {
            const barHeight = Math.floor(Math.random() * 200) + 20; 
            return (
              <div
                key={index}
                style={{
                  width: "20px",
                  height: `${barHeight}px`,
                  backgroundColor: "#3399ff", 
                  marginRight: "5px",
                }}
              />
            );
          })}
        </div>
      </div>
      <div className="expenses">
        <h2>Pokémon Details</h2>
        {pokemonData.map((pokemon) => (
          <ExpenseItem key={pokemon.name} {...pokemon} />
        ))}
      </div>
    </div>
  );
};

export default MainContent;
