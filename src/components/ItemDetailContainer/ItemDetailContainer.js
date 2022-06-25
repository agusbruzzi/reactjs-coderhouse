import { useEffect, useState } from "react"
import { getProductsById } from "../../asynmock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setloading] = useState(true)

    const params = useParams()
    useEffect(() => {
        setloading(true)
        getProductsById(params.productId).then(response => {
            setProduct(response)
        }).finally(()=>{
            setloading(false)
        })
    },[params.productId])

    if(loading){
        //<div className="spinner"></div>
        return <div className='loading'><div className="spinner"></div></div>
    }

    return (
        <>
        <ItemDetail {...product}/>
        </>
    )
}

export default ItemDetailContainer