import React from "react"
import { Container } from "@mui/material"
import Home from "pages/Home/Home"
import { Routes, Route } from "react-router-dom"
import CartPage from "pages/Cart/CartPage"
import AboutPage from "pages/About/AboutPage"
import ShippingPage from "pages/Shipping/ShippingPage"
import PaymantPage from "pages/Paymant/PaymantPage"

type Props = {
    addProductToCart: (id: number, count: number) => void
    productsInCart: {
        [id: number]: number
    }
    removeProductFromCart: (id: number) => void
}

function Main({
    addProductToCart,
    productsInCart,
    removeProductFromCart,
}: Props) {
    return (
        <main>
            <Container maxWidth="lg">
                <Routes>
                    <Route
                        path="/"
                        element={<Home addProductToCart={addProductToCart} />}
                    />
                    <Route
                        path="cart"
                        element={
                            <CartPage
                                productsInCart={productsInCart}
                                removeProductFromCart={removeProductFromCart}
                            />
                        }
                    />
                    <Route path="About" element={<AboutPage />} />
                    <Route path="Shipping" element={<ShippingPage />} />
                    <Route path="Paymant" element={<PaymantPage />} />
                </Routes>
            </Container>
        </main>
    )
}

export default Main
