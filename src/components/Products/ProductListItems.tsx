import React from "react"
import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from "@mui/material"
import "./ProductListItems.scss"

type Props = {
    name: string
    description: string
    type: string
    capacity: number
    price: number
    image: string
}

const PoductListItem = ({
    name,
    description,
    type,
    capacity,
    price,
    image,
}: Props) => {
    return (
        <Card className="product">
            <CardContent>
                <div className="product-image">
                    <img src={image} alt={name} />
                </div>
                <h4>{name}</h4>
                <p className="product-description">{description}</p>
                <div className="product-features">
                    <span>Type</span>: {type}
                </div>
                <div className="product-features">
                    <span>Capacity</span>: {capacity} Gb
                </div>
                <div className="product-price">Price: {price} $</div>
                <div className="product-quantity">
                    <Button variant="contained" size="small">
                        -
                    </Button>
                    <TextField size="small" value="1" variant="outlined" />
                    <Button variant="contained" size="small">
                        +
                    </Button>
                </div>
            </CardContent>
            <CardActions className="btn-wrap">
                <Button variant="contained">Add to cat</Button>
            </CardActions>
        </Card>
    )
}

export default PoductListItem
