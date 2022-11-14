import React from "react"
import { keys } from "lodash"
import productsArray, {
    Product,
    getProductsObjejt,
} from "components/Products/productsArray"

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [key: number]: Product
    }
}

const CartTotal = ({
    productsInCart,
    productsObject = getProductsObjejt(productsArray),
}: Props) => {
    return (
        <div>
            Total:{" "}
            {keys(productsInCart).reduce(
                (sum, productId) =>
                    sum +
                    productsArray[parseInt(productId)].price *
                        productsInCart[parseInt(productId)],
                0
            )}
            $
        </div>
    )
}

export default CartTotal
