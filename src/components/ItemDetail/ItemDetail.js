const ItemDetail = ({id, name, price, img, description}) => {

    return (
        <div>
        <div className="itemDetailContainer">
            <img src={img} alt={name} className="imgDetail"/>
            <h3 className="nameProduct">{name}</h3>
            <h3 className="detailItemProduct">{description}</h3>
            <h5 className="priceProduct">${price}</h5>
        </div>
        </div>
    )
}

export default ItemDetail