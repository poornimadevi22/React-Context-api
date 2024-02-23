import Home from './Home';
import { CartProvider } from "react-use-cart"
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Datas from './Store';
import Cart from './Item';
// import CartItem from './cart';

function App() {
      return (
            <>
                  <CartProvider > 
                  
                  {/* { <Home />  } */}
                  { <Datas/> }
                  <Cart />
                  {/* <CartItem /> */}
                  </CartProvider >
            </>

      )


}





export default App
