const CartItem = (id, name, price, count) => {
    return(
        <>
        <h2>id:{id}</h2>
        <h3>nombre:{name}</h3>
        <h4>precio:{price}</h4>
        <h5>cantidad:{count}</h5>
        </>
    )
}
export default CartItem