import ButtonCount from "../ButtonCount/ButtonCount"
const ItemDetail = ({name, price, img, stock, description}) => {

    const handleOnAdd = (count) => {
        console.log(count)
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