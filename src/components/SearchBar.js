import React, { useState, useEffect } from 'react';
import '../style/searchBar.css'

export default function SearchBar({ handelSearch }) {
    const [searchInput, setSearchInput] = useState("");

    const searchItems = (searchValue) => {
        setSearchInput(searchValue);
    };
    const handelSearchBtn = () => {
        handelSearch(searchInput)
    }

    return (
        <div>
            <input id="search-bar"
                type="text"
                placeholder="Search"
                value={searchInput}
                onChange={(e) => searchItems(e.target.value)}
            />
            <button id="searchBtn" onClick={handelSearchBtn}>Search</button>
        </div>
    )

}