import React from 'react';
import { BiSearchAlt } from 'react-icons/bi'
import { useNavigate } from "react-router-dom";
import './Styles.css'

const SearchBar = () => {

    let navigate = useNavigate();

    const toResult = () => {
        navigate("/result");
    }

    return (
        <div className="search-container">
            <form className='searchForm'>
                <input type="text" placeholder="Search.." name="search" />
                <button onClick={() => toResult()}><BiSearchAlt /></button>
            </form>
        </div>
    )
}

export default SearchBar

