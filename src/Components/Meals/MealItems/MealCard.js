import classes from "./MealCard.module.css";
import MealItemForm from "./MealItemForm";

const MealCard = (props) => {
  const meal = props.mealItem;
  const price = `$ ${meal.price.toFixed(2)}`;

  return (
    <li className={classes.meal} key={meal.id}>
      <div>
        <div className={classes.name}>{meal.name}</div>
        <div className={classes.description}>{meal.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <MealItemForm />
    </li>
  );
};

export default MealCard;
