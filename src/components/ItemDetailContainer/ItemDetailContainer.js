import { useEffect, useState } from "react"
import { getProductsById } from "../../asynmock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const params = useParams()
    useEffect(() => {
        getProductsById(params.productId).then(response => {
            setProduct(response)
        })
    },[])
    console.log(params.productId)

    return (
        <>
        <ItemDetail {...product}/>
        </>
    )
}

export default ItemDetailContainer