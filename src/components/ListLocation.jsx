"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function ListLocation() {
  const [location, setLocation] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getLocation();
  }, []);

  // Get location
  const getLocation = async () => {
    try {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/location"
      );
      const formatLoc = response.data.results.map((location) => {
        return {
          ...location
        };
      });
      console.log(response.data.results, "response");
      setLocation(formatLoc);
    } catch (error) {
      console.log(error);
    }
  };
  
  const handleCardClick = (id) => {
    router.push(`/location/${id}`);
  };

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <thead className="font-medium" style={{fontFamily:"revert-layer", fontSize:"15px", color:"GrayText"}}>
          <tr>
            <th>No.</th>
            <th>Nama</th>
            <th>Type</th>
            <th>Dimension</th>
          </tr>
        </thead>
        <tbody className="font-medium" style={{fontFamily:"monospace"}}>
          {location.map((location, index) => (
            <tr className="hover" key={location.id} onClick={() => handleCardClick(location.id)}>
              <td>{index + 1}</td>
              <td>{location.name}</td>
              <td>{location.type}</td>
              <td>{location.dimension}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
}
