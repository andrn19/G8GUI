import React, { useEffect, useState } from "react"
import Card from 'react-bootstrap/Card';
import SearchBar from "./SearchBar";

import house from './assets/house.png'
import apartment from './assets/apartment.png'

const HousingPage = () => {

    const [housing, setHousing] = useState()
    const [visibleItem, setVisibleItem] = useState(false)

    useEffect(() => {
        const lsHousing = localStorage.getItem('housing')
        const lsHousingParsed = JSON.parse(lsHousing)
        console.log(lsHousingParsed)
        setHousing(lsHousingParsed)
    }, [])

    return (
        <div>
            {visibleItem == true &&
                <div id='contract'>
                    <h1>Contract</h1>
                    <p>This is the contract info</p>
                </div>
            }
            <div id="housingSearch">
                <SearchBar />
            </div>
            <div id='housingImg'>
                <h2>{housing?.location.city + ' | ' + housing?.location.street}</h2> <br />
                <img src={housing?.cardImg === 'house' ? house : apartment} width="500" height="300" />
            </div>
            <div id='housingPCard'>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Information</Card.Title>
                        <Card.Text>
                            Price: {housing?.rent}
                        </Card.Text>
                        <Card.Text>
                            Type: {housing?.housingType}<br/>
                            {housing?.size}<br/>
                            Rooms: {housing?.rooms}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <large>View contract form</large>
                        <button id="contractBtn" onClick={() => setVisibleItem(s => !s)}>Contract</button>
                    </Card.Footer>
                </Card>
            </div>
            <div id='landLord'>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Landlord Contact</Card.Title>
                        <Card.Text>
                            <button id="contactBtn">Contact</button>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div id="bigInfo">
                <h2>Detailed Info</h2>
                <p>{housing?.longInfo}</p>
            </div>
        </div>
    )
}

export default HousingPage;