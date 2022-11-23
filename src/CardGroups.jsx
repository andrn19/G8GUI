import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


import { housing } from './houseData'
import HousingCard from './housingCards';

const CardGrouping = () => {

    const [housingData, setHousingData] = useState(housing)

    return (
        <Row xs={1} md={4} className="g-4">
            {
                housingData.map((houseData) => (
                    <Col>
                        <HousingCard housing={houseData} />
                    </Col>
                ))
            }
        </Row>
    )
}

export default CardGrouping