import React from 'react'
import { Typography } from '@mui/material'

type Props = {}

const ProductList = (props: Props) => {
    return (
        <>
            <Typography
                align="center"
                variant="h4"
                style={{
                    margin: '25px 0',
                    textTransform: 'uppercase',
                }}
            >
                ProductList
            </Typography>
        </>
    )
}

export default ProductList
