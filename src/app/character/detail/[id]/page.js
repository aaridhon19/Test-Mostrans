"use client"
import DetailCharacter from "@/components/DetailCharacter";
import axios from "axios";
import { useEffect, useState } from "react";

export default function DetailPage({ params }) {
    const [character, setCharacter] = useState(null);
    const { id } = params;
    const [isLoading, setIsLoading] = useState(true);


    const getCharacterById = async () => {
        try {
            const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
            setCharacter(response.data);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (id) {
            getCharacterById();
        }
    }, [id]);

    return (
        <>
            <div className="w-full h-screen bg-base-200">
                <div className="p-4">
                    <h1 className="pl-3">
                        <span className="text-2xl font-bold" style={{fontFamily:"-moz-initial", fontSize:"28px"}}>
                            Detail {isLoading ? (<span className="loading loading-dots loading-md"></span>
                        ) : character?.name}
                        </span>
                        <hr className="my-2 border-blueGray-300 mx-auto" style={{ opacity: 0.6 }} />
                    </h1>
                    <DetailCharacter id={id} />
                </div>
            </div >
        </>
    );
}