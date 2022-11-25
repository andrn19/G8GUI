import React, {useEffect} from "react"
import CardsGrouping from "./CardGroups"
import SearchBar from "./SearchBar";

const FrontPage = () => {

    useEffect(() => {
        localStorage.removeItem('search')
    },[])

    return (
        <div>
            <SearchBar />
            <CardsGrouping />
        </div>
    )
}

export default FrontPage;