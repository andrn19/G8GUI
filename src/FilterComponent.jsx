import React from "react"
import Form from 'react-bootstrap/Form';
import SearchBar from "./SearchBar"

const FilterComponent = () => {


    return (
        <div>
            <SearchBar />
            <label for="minprice">Min Price</label>
            <input type="text" id="minprice" name="minprice" />
            <label for="maxprice">Max Price</label>
            <input type="text" id="maxprice" name="maxprice" />
            <label for="size">Size</label>
            <input type="text" id="size" name="size" />
            <label for="rooms">Nr. of Rooms</label>
            <input type="text" id="rooms" name="rooms" />
        </div>
    )
}

export default FilterComponent;