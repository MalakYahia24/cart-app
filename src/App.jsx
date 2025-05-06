
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/Navbar';
import { Routes , Route } from 'react-router-dom';
import Products from './components/Products';
import Cart from './components/Cart';

function App() {
  return (
    <>
         <AppNavbar />
         <Routes>
          <Route path="/" element={<Products />}></Route>
          <Route path="cart" element={<Cart />}></Route>
         </Routes>
    </>
  )
}

export default App
