import React, {useEffect} from 'react';
import { useNavigate } from "react-router-dom";

import Card from 'react-bootstrap/Card';
import house from './assets/house.png'
import apartment from './assets/apartment.png'
import './Styles.css'

function HousingCard(housing) {

    let navigate = useNavigate();

    const toHousing = () => {
        const housingString = JSON.stringify(housing?.housing)
        localStorage.setItem('housing', housingString)
        navigate("/info");
    }


    return (
        <>
            <Card style={{ width: '18rem' }} className='housingCard' onClick={() => toHousing()}>
                <Card.Img variant="top" src={housing?.housing.cardImg === 'house' ? house : apartment}/>
                {housing?.housing.freeContact ? <p>Free Contact</p> : <></>}
                <Card.Body>
                    <Card.Title>{housing?.housing.rooms + ' | ' + housing?.housing.housingType + ' | ' + housing?.housing.size}</Card.Title>
                    <Card.Text>
                        {housing?.housing.shortInfo}
                    </Card.Text>
                    <Card.Text>
                        {housing?.housing.location.city + ' | ' + housing?.housing.location.street}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </>
    );
}

export default HousingCard;