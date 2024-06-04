"use client";
import ListCharacterByLocation from "@/components/ListCharacterByLocation";
import Navbar from "@/components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";

export default function CharacterByLocationPage({ params }) {
    const [location, setLocation] = useState(null);
    const { id } = params;
    const [isLoading, setIsLoading] = useState(true);

    const getCharByLoc = async () => {
        try {
            const locationResponse = await axios.get(`https://rickandmortyapi.com/api/location/${id}`);
            setLocation(locationResponse.data);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (id) {
            getCharByLoc();
        }
    }, [id]);

    return (
        <>
            <div className="w-full h-screen bg-base-200">
                <div className="p-4">
                    <h1 className="pl-3">
                        <span className="text-2xl font-bold" style={{fontFamily:"-moz-initial", fontSize:"28px"}}>
                            List Character By {isLoading ? (
                                <span className="loading loading-dots loading-md"></span>
                            ) : location?.name}
                        </span>
                        <hr className="mt-2 mb-4 border-blueGray-300 mx-auto" style={{ opacity: 0.6 }} />
                    </h1>
                    <ListCharacterByLocation id={id} />
                </div>
            </div>
        </>
    );
}
