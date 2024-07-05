import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RestCard from './RestCard';

function AllRest() {

  const base_url = 'https://restaurant-backend-qcis.onrender.com/restaurants'

  const [allRestData, setAllRestData] = useState([])

  const fetchdata = async () => {
    const result = await axios.get(base_url)
    setAllRestData(result.data)
  }

  console.log(allRestData);

  useEffect(() => {
    fetchdata();
  }, [])
  return (
    <div>
      <Row>
        {
          allRestData.map(item => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <RestCard restaurants={item} />
            </Col>
          ))
        }
      </Row>
    </div>
  )
}

export default AllRest