import React, {useState} from 'react'
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals"
import Cart from "./Components/Cart/Cart"
import CartProvider from './store/CartProvider';

function App() {

  const [showCart, setShowCart] = useState(false);

  const handleShowCart = () => {
    setShowCart(!showCart);
  }

  return (
    <CartProvider>
      {showCart && <Cart showCart = {handleShowCart} />}
      <Header onShowCart = {handleShowCart}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
