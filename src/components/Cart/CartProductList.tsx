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
}

const CartProductList = ({
    productsInCart,
    productsObject = getProductsObjejt(productsArray),
    CartItem = CartProductListItem,
}: Props) => {
    return (
        <>
            {keys(productsInCart).map((productId) => (
                <CartItem
                    key={productId}
                    product={productsArray[parseInt(productId)]}
                    productCount={productsInCart[parseInt(productId)]}
                />
            ))}
        </>
    )
}

export default CartProductList
