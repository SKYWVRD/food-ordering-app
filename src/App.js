import React, {useState} from 'react'
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals"
import Cart from "./Components/Cart/Cart"

function App() {

  const [showCart, setShowCart] = useState(false);

  const handleShowCart = () => {
    setShowCart(!showCart);
  }

  return (
    <React.Fragment>
      {showCart && <Cart showCart = {handleShowCart} />}
      <Header showCart = {handleShowCart}/>
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
