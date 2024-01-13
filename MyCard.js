import Card from 'react-bootstrap/Card';
import 'C:/Users/gerty/Documents/matveiip/my-app/src/components/card.css';
import React from 'react';
import axios from 'axios';
import CloseButton from 'react-bootstrap/CloseButton';

function MyCard(props) {
const handleDelete = (id) => {
    axios.delete(`https://65a2bd4042ecd7d7f0a82886.mockapi.io/users/${id}/`)
    };
return (
    <Card style={{ width: '18rem' }} className="card">
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
    <Card.Body>
        <CloseButton className='button' onClick = {() => handleDelete(props.id)} />
        <Card.Text>{props.id}</Card.Text>
        <Card.Title>{props.login}</Card.Title>
        <Card.Text>{props.password}</Card.Text>
    </Card.Body>
    </Card>
);
};

export default MyCard;

