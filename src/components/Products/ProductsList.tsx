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
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItems
                        name="iPhone X"
                        description="This is iPhone X"
                        type="Phone"
                        capacity={64}
                        price={500}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItems
                        name="iPhone XS"
                        description="This is iPhone X"
                        type="Phone"
                        capacity={128}
                        price={1000}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItems
                        name="iPhone 12Pro"
                        description="This is iPhone X"
                        type="Phone"
                        capacity={512}
                        price={800}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default ProductList
