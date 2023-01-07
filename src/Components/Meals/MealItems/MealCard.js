import classes from "./MealCard.module.css";
import MealItemForm from "./MealItemForm";

const MealCard = (props) => {
  const meal = props.mealItem;
  const price = `$ ${meal.price.toFixed(2)}`;

  return (
    <li className={classes.meal} key={meal.id}>
      <div className={classes.flexContainers}>
        <div className={classes.name}>{meal.name}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div className={classes.flexContainers}>
        <div className={classes.description}>{meal.description}</div>
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealCard;
