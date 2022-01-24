import axios from 'axios';
import React,{ useContext } from 'react';
import { Card, Button } from "react-bootstrap";
import { UserContext, UserDispatchContext} from "../../contexts/context";

export const Cards = (props) => {
    const userDetails = useContext(UserContext);
    const setUserdetails = useContext(UserDispatchContext);

    const handleAddToCart = () => {
        axios.post(`http://localhost:5000/api/cart/${userDetails.id}/${props.id}`)
        .then((response) => {
            
        })
    };

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
                    <Button variant="primary" onClick={handleAddToCart}>Add To Cart</Button>
                    <Button variant="success" style={{marginLeft:"30px"}}>Buy Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
}
