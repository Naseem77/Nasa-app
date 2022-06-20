import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home'
import Favourites from './Favourites'
import Search from "./Search";
import axios from 'axios'
import '../style/container.css'

export default function Container() {
    const [postExistence, setPostExistence] = useState(false)

    const addNewFavToDB = async (newFavourites) => {
        const response = await axios.post("http://localhost:8080/nasa/favourites", newFavourites)
        if (response.status === 208) {
            setPostExistence(true)
            setTimeout(() => {
                setPostExistence(false)
            }, 2500)
        }
    }


    return (

        <div>
            <Route exact path="/"
                render={() => <Home />}
            />
            <Route exact path="/favourites"
                render={() => <Favourites newFavourites={addNewFavToDB} />}
            />
            <Route exact path="/search"
                render={() => <Search addNewFavToDB={addNewFavToDB} postExistence={postExistence} />}
            />
            {postExistence === true ? <div id="liked-message">Already Liked!</div> : <></>}
        </div>

    )

}