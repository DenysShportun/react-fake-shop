import React from "react"
import { Grid, Typography } from "@mui/material"
import ProductListItems from "components/Products/ProductListItems"
import productsArray from "./productsArray"

type ProductProps = {
    name: string
    description: string
    type: string
    capacity: number
    price: number
}

type Props = {}

const ProductList = (props: Props) => {
    return (
        <>
            <Typography
                align="center"
                variant="h4"
                sx={{
                    margin: "25px 0",
                    textTransform: "uppercase",
                }}
            >
                ProductList
            </Typography>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={4}
            >
                {productsArray.map(
                    ({
                        name,
                        description,
                        type,
                        capacity,
                        price,
                    }: ProductProps) => (
                        <Grid item xs={12} sm={6} md={4}>
                            <ProductListItems
                                name={name}
                                description={description}
                                type={type}
                                capacity={capacity}
                                price={price}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}

export default ProductList
