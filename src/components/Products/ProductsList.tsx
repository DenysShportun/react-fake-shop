import React from "react"
import { Grid, Typography } from "@mui/material"
import ProductListItems from "components/Products/ProductListItems"
import productsArray from "./productsArray"

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
                {productsArray.map((product) => (
                    <Grid item xs={12} sm={6} md={4}>
                        <ProductListItems
                            name={product.name}
                            description={product.description}
                            type={product.type}
                            capacity={product.capacity}
                            price={product.price}
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default ProductList
