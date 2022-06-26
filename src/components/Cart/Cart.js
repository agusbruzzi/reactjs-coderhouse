import CartItemList from "../CartItemList/cartItemList"
import CartContext from "../../context/CartContext"
import { useContext } from "react"

const Cart = () => {
    const {cart} = useContext(CartContext)

    return(
        <div>
        <h1>Carrito</h1>
        <CartItemList productsAdded={cart}/>
        </div>
    )
}
export default Cart