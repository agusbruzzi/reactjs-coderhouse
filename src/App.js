import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/footer';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/category/:category' element={<ItemListContainer/>}/>
              <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
              <Route path='/cart' element={<Cart />} />
            </Routes>
            <Footer/>
            </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
