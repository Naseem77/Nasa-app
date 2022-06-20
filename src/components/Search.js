import axios from 'axios'
import React, { useState, useEffect } from 'react';
import '../style/search.css'
import SearchBar from './SearchBar';
import ReactLoading from "react-loading";
import "bootstrap/dist/css/bootstrap.css";

export default function Search({ addNewFavToDB }) {
    const [searchData, setSearchData] = useState([]);
    const [done, setDone] = useState(false);


    useEffect(() => {
    }, [searchData])

    const handelSearch = async (searchInput) => {
        setDone(true)
        const response = await axios.get(`http://localhost:8080/nasa/search/${searchInput}`)
        setSearchData(response.data)
        setDone(false)
    }

    const addToFavourites = (post) => {
        addNewFavToDB(post)
    }

    return (
        <div>
            <SearchBar handelSearch={handelSearch} />
            {done === true ? (
                <ReactLoading id="loading" type={"bars"} color={"black"} />
            ) : (
                    <div>
                        <div className="search-container" >
                            {searchData.map((v, i) => {
                                return (

                                    <div className="search-card" key={v.title + i}>
                                        <div className="search-title">{v.title}</div>
                                        <div className="search-url">
                                            <img id="url" src={v.url} />
                                            <div onClick={() => { addToFavourites(v) }} id="icon"><button id="likeBtn">Like</button></div>
                                        </div>

                                    </div>
                                )
                            })}
                        </div>

                    </div>
                )
            }

        </div>
    )

}