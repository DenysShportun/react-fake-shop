import React from 'react'
import { Grid, Typography } from '@mui/material'
import ProductListItems from 'components/Products/ProductListItems'

type Props = {}

const ProductList = (props: Props) => {
    return (
        <>
            <Typography
                align="center"
                variant="h4"
                sx={{
                    margin: '25px 0',
                    textTransform: 'uppercase',
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
                <Grid item>
                    <ProductListItems />
                </Grid>
            </Grid>
        </>
    )
}

export default ProductList
