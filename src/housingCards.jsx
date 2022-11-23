import React, {useEffect} from 'react';
import Card from 'react-bootstrap/Card';

function HousingCard(housing) {

    useEffect(() => {
        console.log(housing.housing)
    })

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={housing?.cardImg} />
                <Card.Body>
                    <Card.Title>{housing?.housing.rooms + ' * ' + housing?.housing.housingType + ' * ' + housing?.housing.size}</Card.Title>
                    <Card.Text>
                        {housing?.housing.shortInfo}
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