import React from "react";
import { Link } from 'react-router-dom'
import '../style/navBar.css'
const logo = "https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png"

export default function NavBar() {
    return (

        <div className="NavBar-header">
            <Link className="header-link" to="/">Home </Link>
            <Link className="header-link" to="/search">Search </Link>
            <Link className="header-link" to="/favourites">Favourites </Link>
            <div
                id="user-icon"
                style={{ backgroundImage: `url(${logo})` }}
            ></div>
        </div>
    )

}