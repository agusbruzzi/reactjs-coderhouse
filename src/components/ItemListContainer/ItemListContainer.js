import {useState , useEffect} from 'react'
import { getProducts, getProductsByCategory } from '../../asynmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    const {category} = useParams()
    console.log(category)

    useEffect(() =>{
        if(!category){
            getProducts().then(response => {
                setProducts(response)
            })
        } else{
            getProductsByCategory(category).then(response => {
                setProducts(response)
            })
        }

    }, [category])

    return (
        <div className='itemListContainer'>
            <ItemList products={products}/>
        </div>
        
    )
}
 
export default ItemListContainer