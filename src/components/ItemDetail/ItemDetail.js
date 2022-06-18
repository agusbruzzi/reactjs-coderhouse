import ButtonCount from "../ButtonCount/ButtonCount"
import { useContext } from 'react';
import CartContext from "../../context/CartContext";
const ItemDetail = ({id, name, price, img, stock, description}) => {

    const {addItem} = useContext(CartContext)
    const handleOnAdd = (count) => {
        addItem({id, name, price, count})
    } 

    return (
        <div>
        <div className="itemDetailContainer">
            <img src={img} alt={name} className="imgDetail"/>
            <h3 className="nameProduct">{name}</h3>
            <h3 className="detailItemProduct">{description}</h3>
            <h5 className="priceProduct">${price}</h5>
            <ButtonCount onAdd={handleOnAdd} stock={stock}/>
        </div>
        </div>
    )
}

export default ItemDetail