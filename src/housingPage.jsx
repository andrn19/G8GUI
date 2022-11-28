import React from "react"

const HousingPage = () => {


    return (
        <div>
            <Row>
                <SearchBar />
                <Col>
                    <Card.Img variant="top" src={housing?.housing.cardImg === 'house' ? house : apartment}/>
                    <Text> More detailed information </Text>
                </Col>
                <Col>
                    <div><HousingCard housing={houseData} /></div>
                    <div><Text> {housing?.housing.shortInfo} </Text></div>
                    <Button>View contract form </Button>
                    <Button>Landlord info - contact here </Button>
                </Col>
            </Row>
        </div>
    )
}

export default HousingPage;