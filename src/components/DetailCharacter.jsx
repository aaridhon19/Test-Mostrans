"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function DetailCharacter(props) {
  const [character, setCharacter] = useState(null);
  const { id } = props;

  useEffect(() => {
    if (id) {
      getCharacterById(id);
    }
  }, [id]);

  const getCharacterById = async (id) => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      setCharacter(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!character) {
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
    <div className="overflow-x-auto m-3">
      <div className="card glass mx-auto p-4">
        <div className="avatar justify-center mt-8">
          <div className="w-40 rounded-full image-container">
            <img
              src={character.image}
              alt={character.name}
              className="w-full h-48 object-cover"
            />
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title justify-center text-4xl font-bold border-b pb-2 mb-2" style={{fontFamily:"cursive", fontSize:"38px"}}>{character.name}</h2>
          <ul className="list-disc pl-4 font-medium text-white-600" style={{fontFamily:"monospace", fontSize:"18px"}}>
            <li>
              <strong>Status :</strong> {character.status}
            </li>
            <li>
              <strong>Species :</strong> {character.species}
            </li>
            <li>
              <strong>Gender :</strong> {character.gender}
            </li>
            <li>
              <strong>Origin :</strong> {character.origin.name}
            </li>
            <li>
              <strong>Location :</strong> {character.location.name}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
