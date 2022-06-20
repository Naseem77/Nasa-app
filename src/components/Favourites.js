import React from "react";
import axios from 'axios'
import { useState, useEffect } from 'react';
import '../style/favourites.css'
export default function Favourites() {
    const [favourites, setFavourites] = useState([])


    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const response = await axios.get("http://localhost:8080/nasa/favourites")
        await setFavourites(response.data)
    }
    const disLikePost = async (post) => {
        await axios.delete(`http://localhost:8080/nasa/${post}`);
        await fetchData()
    }

    return (
        <div className="favourites-container">
            {favourites.map((v, i) => {
                return (
                    <div className="favourites-card" key={v.title + i}>
                        <div className="favourites-title">{v.title}</div>
                        <div className="favourites-url">
                            <img id="url" src={v.url} />
                            <div onClick={() => { disLikePost(v.title) }} id="icon"><button id="favouritesBtn">Unlike</button></div>
                        </div>
                    </div>
                )
            })}
        </div>
    )

}