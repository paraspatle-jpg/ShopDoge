import React from 'react';
import { Card, Button } from "react-bootstrap";

export const Cart = () => {
    return (
        <div>
             <Card>
                <Card.Header>{props.title}</Card.Header>
                <Card.Body>
                    <img style={{width:"100px",height:"100px"}} src={props.image}/>
                    <Card.Title>{props.price}$</Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                    <Button variant="success" style={{marginLeft:"30px"}}>Buy Now</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
