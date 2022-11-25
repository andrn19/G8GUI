import React, {useRef} from 'react';
import { BiSearchAlt } from 'react-icons/bi'
import { useNavigate } from "react-router-dom";
import './Styles.css'

const SearchBar = () => {

    const searchRef = useRef()

    let navigate = useNavigate();

    const toResult = (e) => {
        e.preventDefault()
        localStorage.setItem('search', searchRef.current.value)
        navigate("/result");
    }

    return (
        <div className="search-container">
            <form className='searchForm' onSubmit={toResult}>
                <input ref={searchRef} type="text" placeholder="Search.." id="search" />
                <button type='submit'><BiSearchAlt /></button>
            </form>
        </div>
    )
}

export default SearchBar

