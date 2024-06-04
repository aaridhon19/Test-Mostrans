"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function ListCharacter() {
  const [character, setCharacter] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getCharacter();
  }, []);

  // Get character
  const getCharacter = async () => {
    try {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/character"
      );
      const formatChar = response.data.results.map((character) => {
        return {
          ...character,
        };
      });
      console.log(response.data.results, "response");
      setCharacter(formatChar);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCardClick = (id) => {
    router.push(`/character/detail/${id}`);
  };

  return (
    <div className="overflow-x-auto px-3 mb-14">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {character.map((character) => (
          <div
            key={character.id}
            className="card w-full glass cursor-pointer"
            onClick={() => handleCardClick(character.id)}
          >
            <figure>
              <img
                src={character.image}
                alt={character.name}
                className="w-full h-52 object-cover"
              />
            </figure>
            <div className="card-body px-3 py-4">
              <h2
                className="card-title justify-center text-2xl font-bold"
                style={{ fontFamily: "cursive", fontSize: "24px" }}
              >
                {character.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
