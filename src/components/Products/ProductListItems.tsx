import React, { useState } from "react"
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
    addProductToCart: (count: number, price: number) => void
}

const PoductListItem = ({
    name,
    description,
    type,
    capacity,
    price,
    image,
    addProductToCart,
}: Props) => {
    const [count, setCount] = useState<number>(1)

    const onIncrementClick = () =>
        setCount((prevState: number) => prevState + 1)

    const onDecrementClick = () =>
        setCount((prevState: number) => prevState - 1)

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
                <div>
                    <button>Checnge color</button>
                </div>
                <div className="product-quantity">
                    <Button
                        variant="contained"
                        size="small"
                        onClick={onDecrementClick}
                        disabled={count <= 1}
                    >
                        -
                    </Button>
                    <TextField size="small" value={count} variant="outlined" />
                    <Button
                        variant="contained"
                        size="small"
                        onClick={() => onIncrementClick()}
                        disabled={count >= 10}
                    >
                        +
                    </Button>
                </div>
            </CardContent>
            <CardActions className="btn-wrap">
                <Button
                    variant="contained"
                    onClick={() => addProductToCart(count, price)}
                >
                    Add to cat
                </Button>
            </CardActions>
        </Card>
    )
}

export default PoductListItem
