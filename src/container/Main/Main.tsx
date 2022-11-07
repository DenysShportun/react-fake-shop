import React from "react"
import { Container } from "@mui/material"
import Home from "pages/Home/Home"
import { Routes, Route } from "react-router-dom"
import CartPage from "pages/Cart/CartPage"

type Props = {
    addProductToCart: (id: number, count: number) => void
}

const Main = ({ addProductToCart }: Props) => {
    return (
        <main>
            <Container maxWidth="lg">
                <Routes>
                    <Route
                        path="/"
                        element={<Home addProductToCart={addProductToCart} />}
                    />
                    <Route path="cart" element={<CartPage />} />
                </Routes>
            </Container>
        </main>
    )
}

export default Main
