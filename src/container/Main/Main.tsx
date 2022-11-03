import React from "react"
import { Container } from "@mui/material"
import Home from "pages/Home/Home"

type Props = {
    addProductToCart: (count: number, price: number) => void
}

const Main = ({ addProductToCart }: Props) => {
    return (
        <main>
            <Container maxWidth="lg">
                <Home addProductToCart={addProductToCart} />
            </Container>
        </main>
    )
}

export default Main
