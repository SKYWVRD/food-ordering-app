import {useContext} from 'react'
import classes from "./MealCard.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from '../../../store/cart-context';

const MealCard = (props) => {
  const meal = props.mealItem;
  const price = `$ ${meal.price.toFixed(2)}`;

  const cartCtx = useContext(CartContext)

  const addToCartHandler = amount =>{
    cartCtx.addItem({
      id: meal.id,
      name: meal.name,
      amount: amount,
      price: meal.price
    });

    console.log(cartCtx);
  }

  return (
    <li className={classes.meal} key={meal.id}>
      <div>
        <div className={classes.name}>{meal.name}</div>
        <div className={classes.description}>{meal.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <MealItemForm onAddToCart={addToCartHandler}/>
    </li>
  );
};

export default MealCard;
