import React from 'react';
import { BiSearchAlt } from 'react-icons/bi'
import { useNavigate } from "react-router-dom";

const SearchBar = () => {

    let navigate = useNavigate();

    const toResult = () => {
        navigate("/result");
    }

    return (
        <div class="search-container">
            <form action="/action_page.php">
                <input type="text" placeholder="Search.." name="search" />
                <button type="submit" onClick={() => toResult()}><BiSearchAlt /></button>
            </form>
        </div>
    )
}

export default SearchBar

