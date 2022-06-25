import {useState , useEffect} from 'react'
import { getProducts, getProductsByCategory } from '../../asynmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setloading] = useState(true)
    const {category} = useParams()
    
    useEffect(() =>{
        setloading(true)
        if(!category){
            getProducts().then(response => {
                setProducts(response)
            }).finally(() => {
                setloading(false)
            })
        } else{
            getProductsByCategory(category).then(response => {
                setProducts(response)
            }).finally(()=>{
                setloading(false)
            })
        }
    }, [category])

    if(loading){
        //<div className="spinner"></div>
        return <div className='loading'><div className="spinner"></div></div>
    }

    return (
        <div className='itemListContainer'>
            <ItemList products={products}/>
        </div>
        
    )
}
 
export default ItemListContainer