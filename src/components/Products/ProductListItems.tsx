import React from 'react'
import { Button, Card, CardActions, CardContent } from '@mui/material'

type Props = {
    name: string
    description: string
    type: string
    capacity: number
    price: number
}

const PoductListItem = (props: Props) => {
    return (
        <Card>
            <CardContent>
                <h4>{props.name}</h4>
                <p>{props.description}</p>
                <div>Type: {props.type}</div>
                <div>Capacity: {props.capacity} Gb</div>
                <div>Price: {props.price} $</div>
            </CardContent>
            <CardActions>
                <Button>Add to cat</Button>
            </CardActions>
        </Card>
    )
}

export default PoductListItem
