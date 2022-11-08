import React from "react"
import { keys } from "lodash"
import productsArray, {
    getProductsObjejt,
    Product,
} from "components/Products/productsArray"

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [key: number]: Product
    }
}

const CartPage = ({
    productsInCart,
    productsObject = getProductsObjejt(productsArray),
}: Props) => {
    return (
        <div>
            <div>
                {" "}
                {keys(productsInCart).map((productId) => (
                    <div key={productId}>
                        {productsArray[parseInt(productId)].name} :{" "}
                        {productsInCart[parseInt(productId)]},
                    </div>
                ))}
            </div>
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
        </div>
    )
}

export default CartPage
