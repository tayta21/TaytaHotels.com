import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';



const HotelCard = (props) => {
    return (
        <div style={{ margin: '20px' }}>
            <Card style={{ width: '19rem', padding: '4px' }}>
                <Card.Img style={{ borderRadius: '15px' }} variant="top" src={props.hotel.img} />
                <Card.Body>
                    <Card.Title>{props.hotel.name}</Card.Title>
                    <Card.Text>{props.hotel.description}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>{props.hotel.location}</ListGroupItem>
                    <ListGroupItem><StarRatingComponent
                        starCount={5}
                        value={props.hotel.rate}
                    /></ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Link to={`/Confirmation/${props.hotel.id}`}><button className='ba'>reserve now</button></Link>

                </Card.Body>
            </Card>
        </div>
    );
}
export default HotelCard;