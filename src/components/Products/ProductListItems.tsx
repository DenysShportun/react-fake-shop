import React from "react"
import { Button, Card, CardActions, CardContent } from "@mui/material"
import "./ProductListItems.scss"

type Props = {
    name: string
    description: string
    type: string
    capacity: number
    price: number
}

const PoductListItem = ({
    name,
    description,
    type,
    capacity,
    price,
}: Props) => {
    return (
        <Card className="product">
            <CardContent>
                <h4>{name}</h4>
                <p className="product-description">{description}</p>
                <div className="product-features">
                    <span>Type</span>: {type}
                </div>
                <div className="product-features">
                    <span>Capacity</span>: {capacity} Gb
                </div>
                <div className="product-price">Price: {price} $</div>
            </CardContent>
            <CardActions className="btn-wrap">
                <Button variant="contained">Add to cat</Button>
            </CardActions>
        </Card>
    )
}

export default PoductListItem
