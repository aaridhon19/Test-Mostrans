"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function ListCharacterByLocation(props) {
  const [characters, setCharacters] = useState([]);
  const { id } = props;

  useEffect(() => {
    if (id) {
      getCharacterByLocation(id);
    }
  }, [id]);

  // Get character by location
  const getCharacterByLocation = async (id) => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/location/${id}`
      );
      const residentsUrls = response.data.residents;
      const residentsPromises = residentsUrls.map((url) => axios.get(url));
      const residentsResponses = await Promise.all(residentsPromises);
      const residentsData = residentsResponses.map((res) => res.data);
      setCharacters(residentsData);
    } catch (error) {
      console.log(error);
    }
  };

  if (characters.length === 0) {
    return (
      <div
        className="flex mt-10"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto px-3 mb-14">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {characters.map((character) => (
          <div key={character.id} className="card w-full glass cursor-pointer">
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
              <div className="mx-2 p-1 font-medium" style={{fontFamily:"monospace", fontSize:"16px"}}>
                <p>
                  <strong>Status :</strong> {character.status}
                </p>
                <p>
                  <strong>Species :</strong> {character.species}
                </p>
                <p>
                  <strong>Gender :</strong> {character.gender}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
