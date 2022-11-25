import React, { useState } from "react"
import CardsGrouping from "./CardGroups"
import FilterComponent from './FilterComponent'

const SearchResultPage = () => {

    const [filters, setFilters] = useState()

    const getFilters = (filterObj) => {
        console.log(filterObj)
        setFilters(filterObj)
    }

    return (
        <div>
            <FilterComponent getFilters={getFilters} />
            <CardsGrouping filters={filters} />
        </div>
    )
}

export default SearchResultPage;