import React from "react"
import CardsGrouping from "./CardGroups"
import FilterComponent from './FilterComponent'

const SearchResultPage = () => {


    return (
        <div>
            <FilterComponent />
            <CardsGrouping />
        </div>
    )
}

export default SearchResultPage;