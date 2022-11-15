import React from "react"
import { keys } from "lodash"
import productsArray, {
    getProductsObjejt,
    Product,
} from "components/Products/productsArray"
import CartProductListItem from "./CartProductListItem"

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [key: number]: Product
    }
    CartItem?: any
    removeProductFromCart?: (id: number) => void
    changeProductQuantity?: (id: number, count: number) => void
}

const CartProductList = ({
    productsInCart,
    productsObject = getProductsObjejt(productsArray),
    CartItem = CartProductListItem,
    removeProductFromCart,
    changeProductQuantity,
}: Props) => {
    return (
        <>
            {keys(productsInCart).map((productId) => (
                <CartItem
                    key={productId}
                    product={productsObject[parseInt(productId)]}
                    productCount={productsInCart[parseInt(productId)]}
                    removeProductFromCart={removeProductFromCart}
                    changeProductQuantity={changeProductQuantity}
                />
            ))}
        </>
    )
}

export default CartProductList
