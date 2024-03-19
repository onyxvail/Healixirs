import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/homes' element={<Shop category="home" />} />
          <Route path='/shop' element={<ShopCategory category="shop" />} />
          <Route path='/abouts' element={<ShopCategory category="about" />} />
          <Route path='/contacts' element={<ShopCategory category="contact" />} />
          <Route path='/product' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
          <Route path='/:productId' element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
