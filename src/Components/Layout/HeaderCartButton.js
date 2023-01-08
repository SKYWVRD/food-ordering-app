import {useContext} from 'react'

import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context"

const HeaderCartButton = (props) => {

  const cartCtx = useContext(CartContext)

  const numberOfCartitems = cartCtx.items.reduce((currentValue, item)=>{
    return currentValue + item.amount
  }, 0)

  return (
    <button className={classes.button} onClick={props.onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartitems}</span>
    </button>
  );
};

export default HeaderCartButton;
