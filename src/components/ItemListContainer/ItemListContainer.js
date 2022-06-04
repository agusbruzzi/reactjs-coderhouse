import {useState , useEffect} from 'react'
import { getProducts } from '../../asynmock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([ ])

    useEffect(() =>{
        getProducts().then(response => {
            setProducts(response)
        })
    }, [])
    console.log(products);

    return (
        <div className='itemListContainer'>
            <ItemList products={products}/>
        </div>
        
    )
}
 
export default ItemListContainer