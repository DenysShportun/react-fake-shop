import ProductsList from "components/Products/ProductsList"
import Reviews from "components/Reviews/Reviews"

import React from "react"

type Props = {
    addProductToCart: (id: number, count: number) => void
}

const Home = ({ addProductToCart }: Props) => {
    return (
        <>
            <ProductsList addProductToCart={addProductToCart} />
            <Reviews />
        </>
    )
}

export default Home
