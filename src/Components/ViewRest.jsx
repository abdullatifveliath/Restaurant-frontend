import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { useParams } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import RestOp from './RestOp';
import RestReview from './RestReview';

function ViewRest() {
    // get the id of particular restaurant
    // const pathParams=useParams()
    // console.log(pathParams.id); // object { id : 1 }
    // Returns an obj of key/value pairs of the dynamic params from the current URL


    // destructuring
    const { id } = useParams()
    console.log(id); // object { id : 1 }

    const base_url = "https://restaurant-backend-qcis.onrender.com/restaurants"

    const [restDetails, setRestDetails] = useState({})

    // API call to fetch the particular restaurant details

    const fetchRestDetails = async () => {
        const result = await axios.get(`${base_url}/${id}`)
        console.log(result.data);
        setRestDetails(result.data)
    }
    console.log(restDetails);

    useEffect(() => {
        fetchRestDetails()
    }, [])

    return (
        <div>
            <Row>
                <Col>
                    <img src={restDetails.photograph} height={'500px'} width={'500px'} className='m-4' alt="" />
                </Col>
                <Col className='m-5 p-5'>
                    <ListGroup className='m-5'>
                        <h1>{restDetails.name}</h1>
                        <ListGroup.Item as="li">Address : {restDetails.address}</ListGroup.Item>
                        <ListGroup.Item as="li">Cuisine Type : {restDetails.cuisine_type}</ListGroup.Item>
                        <ListGroup.Item as="li">Neighborhood : {restDetails.neighborhood}</ListGroup.Item>
                        <ListGroup.Item as="li"><RestOp op={restDetails.operating_hours} /></ListGroup.Item>
                        <ListGroup.Item as="li"><RestReview review={restDetails.reviews} /></ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </div>
    )
}

export default ViewRest