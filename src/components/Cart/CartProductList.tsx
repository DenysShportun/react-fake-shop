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

const CartProductList = ({
    productsInCart,
    productsObject = getProductsObjejt(productsArray),
}: Props) => {
    return (
        <div>
            {" "}
            {keys(productsInCart).map((productId) => (
                <div key={productId}>
                    {productsArray[parseInt(productId)].name} :{" "}
                    {productsInCart[parseInt(productId)]},
                </div>
            ))}
        </div>
    )
}

export default CartProductList
