import React, {useEffect, useState} from "react"
import Form from 'react-bootstrap/Form';
import SearchBar from "./SearchBar"
import './Styles.css'

const FilterComponent = (props) => {
    const [houseFilter, setHouseFilter] = useState(false)
    const [apartmentFilter, setApartmentFilter] = useState(false)
    
    useEffect(() => {
        let filterObj = {}
        filterObj['apartment'] = apartmentFilter
        
        props.getFilters(filterObj)
    }, [apartmentFilter])


    const changeHouseState = () => {
        setHouseFilter((s) => !s)
    }

    const changeApartmentState = () => {
        setApartmentFilter((s) => !s)
    }

    return (
        <div id="filterDiv">
            <SearchBar />
            <label htmlFor="minprice">Min Price:</label>
            <input type="text" id="minprice" className="filterInput" name="minprice" />
            <label htmlFor="maxprice">Max Price:</label>
            <input type="text" id="maxprice" className="filterInput" name="maxprice" />
            <label htmlFor="size">Size:</label>
            <input type="text" id="size" className="filterInput" name="size" />
            <label htmlFor="rooms">Nr. of Rooms:</label>
            <input type="text" id="rooms" className="filterInput" name="rooms" />
            <br/>
            <Form.Check
                inline
                label="House"
                name="House"
                type="checkbox"
                onChange={() => changeHouseState()}
                id='House'
            />
            <Form.Check
                inline
                label="Apartment"
                name="Apartment"
                type="checkbox"
                onChange={() => changeApartmentState()}
                id='Apartment'
            />
            <Form.Check
                inline
                label="Terrace House"
                name="terraceHouse"
                type="checkbox"
                id='terraceHouse'
            />
        </div>
    )
}

export default FilterComponent;