import React, { useEffect } from 'react';

import CardGroup from 'react-bootstrap/CardGroup';

import { housing } from './houseData'
import HousingCard from './housingCards';

const CardGrouping = () => {

    return (
        <div>
            <CardGroup>
                {
                    housing.map((houseData) => (
                        <HousingCard housing={houseData} />
                    ))
                }
            </CardGroup>
        </div>
    )
}

export default CardGrouping