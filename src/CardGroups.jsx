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
            let filtered

            if (Object.keys(props.filters)[0] == 'apartment' && props.filters.apartment == true) {
                if(filtered === undefined) {
                    filtered = housingData.filter((bolig) => bolig.housingType == 'apartment')
                }
                else {
                    filtered = filtered.filter((bolig) => bolig.housingType == 'apartment')
                }
            }
            if (Object.keys(props.filters)[1] == 'contact' && props.filters.contact == true) {
                if(filtered === undefined) {
                    filtered = housingData.filter((bolig) => bolig.freeContact == true)
                }
                else {
                   filtered = filtered.filter((bolig) => bolig.freeContact == true)
                }
            }
            if (props.filters.apartment != true && props.filters.contact != true) {
                setHousingData(housing)
            }
            else {
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
                housingData.map((houseData, i) => (
                    <Col key={i}>
                        <HousingCard housing={houseData}  />
                    </Col>
                ))
            }
        </Row>
    )
}

export default CardGrouping