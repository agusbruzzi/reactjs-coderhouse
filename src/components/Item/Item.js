const Item = ({name, price, img}) => {
    return(
        <div className="divItem" >
            <img src={img} alt={name} className="imgItem"/>
            <h3>{name}</h3>
            <h5>${price}</h5>
        </div>
       )
}

export default Item