import {useState , useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from "react-router-dom"
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from '../../services/firebase'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setloading] = useState(true)
    const {category} = useParams()
    
    useEffect(() =>{
        setloading(true)

        const collectionRef = category ? (
            query(collection(db, 'items'), where('category', '==', category))
        ) : (collection(db, 'items'))

        getDocs(collectionRef).then(response =>{
            const productsFS = response.docs.map(doc =>{
                return {id: doc.id,
                        ...doc.data()}
            })
            setProducts(productsFS)
        }).finally(()=>{
            setloading(false)
        })
    }, [category])

    if(loading){
        return <div className='loading'><div className="spinner"></div></div>
    }

    return (
        <div className='itemListContainer'>
            <ItemList products={products}/>
        </div>
    )
}
 
export default ItemListContainer