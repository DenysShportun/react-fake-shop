import React from "react"

import "./Menu.scss"
import MenuItem from "./MenuItem"

type Props = {}

const Menu = (props: Props) => {
    return (
        <>
            <MenuItem to="/">Home</MenuItem>
            <MenuItem to="/About">About</MenuItem>
            <MenuItem to="/Shipping">Shipping</MenuItem>
            <MenuItem to="/Paymant">Paymant</MenuItem>
            <MenuItem to="/cart">Cart</MenuItem>
        </>
    )
}

export default Menu
