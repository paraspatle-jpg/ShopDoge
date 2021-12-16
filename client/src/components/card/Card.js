import React from 'react'
import { Card, Button } from "react-bootstrap"

export const Cards = (props) => {
    return (
        <div>
            <Card>
                <Card.Header>{props.title}</Card.Header>
                <Card.Body>
                    <img src={props.image}/>
                    <Card.Title>{props.price}</Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                    <Button variant="primary"></Button>
                </Card.Body>
            </Card>
        </div>
    )
}
