import React from "react"
import CardsGrouping from "./CardGroups"

const FrontPage = () => {


    return (
        <div>
            <form>
                <label for='searchField'>Search</label><br />
                <input type="text" id="searchField" name='searchField' />
            </form>
            <CardsGrouping/>
        </div>
    )
}

export default FrontPage;