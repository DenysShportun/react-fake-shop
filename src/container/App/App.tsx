import React, { useState } from "react"
import CssBaseline from "@mui/material/CssBaseline"
import Header from "container/Header/Header"
import Main from "../Main/Main"
import Footer from "../Footer/Footer"
import { StyledEngineProvider } from "@mui/material"
import { count } from "console"

type Props = {}

type CartData = {
    totalCount: number
    totalPrice: number
}

const App = (props: Props) => {
    const [cartData, setCartData] = useState<CartData>({
        totalCount: 0,
        totalPrice: 0,
    })

    const addProductsToCart = (count: number, price: number) => {
        setCartData((prevState: CartData) => ({
            totalCount: prevState.totalCount + count,
            totalPrice: prevState.totalPrice + count * price,
        }))
    }

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header cartData={cartData} />
            <button onClick={() => addProductsToCart(1, 1000)}>
                {" "}
                Add to Cart{" "}
            </button>
            <Main />
            <Footer />
        </StyledEngineProvider>
    )
}

export default App
