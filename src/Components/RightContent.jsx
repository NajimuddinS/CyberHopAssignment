import React, { useEffect, useState } from "react";

const RightContent = () => {
  const [pokemonTypes, setPokemonTypes] = useState([]);
  
  const fetchAllPokemonNames = async () => {
    let allPokemon = [];
    let nextUrl = "https://pokeapi.co/api/v2/pokemon?limit=1000";

    while (nextUrl) {
      const res = await fetch(nextUrl);
      const data = await res.json();
      allPokemon = [...allPokemon, ...data.results.map(p => p.name)];
      nextUrl = data.next;
    }

    return allPokemon;
  };

  useEffect(() => {
    const fetchPokemonTypes = async () => {
      const pokemonNames = await fetchAllPokemonNames();
      const typeCounts = {};

      await Promise.all(
        pokemonNames.slice(0, 50).map(async (name) => {
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
          const data = await res.json();
          data.types.forEach((type) => {
            const typeName = type.type.name;
            typeCounts[typeName] = (typeCounts[typeName] || 0) + 1;
          });
        })
      );

      const formattedData = Object.entries(typeCounts).map(([type, count]) => ({
        label: type.charAt(0).toUpperCase() + type.slice(1),
        count,
        progress: (count / 50) * 100,
      }));

      setPokemonTypes(formattedData);
    };

    fetchPokemonTypes();
  }, []);

  return (
    <div className="right-content">
      <div className="stats-section">
        <h2>Pokémon Type Distribution</h2>
        {pokemonTypes.map((item, index) => (
          <div key={index} className="stat-item">
            <div className="stat-details">
              <span>{item.label}</span>
              <span>{item.count} Pokémon</span>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${item.progress}%`, backgroundColor: "#4CAF50" }}></div>
            </div>
          </div>
        ))}
      </div>
      <div className="tips-box">
        <img src="https://dashboard.codeparrot.ai/api/image/Z9Bt0ed_tb-16vI0/illustra.png" alt="Illustration" />
        <h3>Learn About Pokémon</h3>
        <p>Discover different Pokémon types and their strengths in battles!</p>
        <button className="tip-button">VIEW DETAILS</button>
      </div>
    </div>
  );
};

export default RightContent;
