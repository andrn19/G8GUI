import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


import { housing } from './houseData'
import HousingCard from './housingCards';

const CardGrouping = (props) => {

    const [housingData, setHousingData] = useState(housing)

    useEffect(() => {
        setTimeout(() => filtering(), "50")
    }, [])

    useEffect(() => {
        console.log(props.filters)
        if (props.filters != undefined) {
            console.log(Object.keys(props.filters)[0] == 'apartment' && props.filters.apartment == true)
            if (Object.keys(props.filters)[0] == 'apartment' && props.filters.apartment == true) {
                const filtered = housingData.filter((bolig) => bolig.housingType == 'apartment')
                console.log(filtered)
                setHousingData(filtered)
            }
        }
        else {
            setHousingData(housing)
        }
    }, [props.filters])

    const filtering = () => {
        const searchString = localStorage.getItem('search')
        if (searchString !== null) {
            const filteredHousing = housing.filter((hus) => {
                return hus.location.city.toLowerCase().includes(searchString.toLowerCase()) || hus.location.street.toLowerCase().includes(searchString.toLowerCase())
            })
            setHousingData(filteredHousing)
        }
    }

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