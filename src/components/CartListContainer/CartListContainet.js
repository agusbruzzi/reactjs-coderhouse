import CartContext from "../../context/CartContext"
import CartItemList from "../CartItemList/CartItemList"
import { useContext } from "react"

const CartListContainer = ({total}) => {
    const {cart} = useContext(CartContext)

    return(
        <div className="cartWidht">
            <h1 className="titleCarrito">Carrito</h1>
            <div className="divCartAttributes">
                <h2 className="categoryCart product">Producto</h2>
                <h2 className="categoryCart price">Precio</h2>
                <h2 className="categoryCart count">Cantidad</h2>
                <h2 className="categoryCart subtotal">Subtotal</h2>
                <h2 className="categoryCart subtotal">Eliminar</h2>
            </div>
            <div className="divCart">
                <CartItemList productsAdded={cart}/>
            </div>
            <div className="divCartFinish">
                <h2 className="categoryCart total">Total:</h2>
                <h2 className="categoryCart numbertotal">${total}</h2>
                <h2 className="finalizarCompra">Finalizar Compra</h2>
            </div>
        </div>
        
    )
}
export default CartListContainer 