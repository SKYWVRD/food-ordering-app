import classes from "./MealCard.module.css";

const MealCard = (props) => {
  const meal = props.mealItem;

  return (
    <li className={classes.meal} key={meal.id}>
      <div className={classes.mainInfo}>
        <div className={classes.name}>{meal.name}</div>
        <div className={classes.price}>$ {meal.price}</div>
      </div>
      <div className={classes.description}>{meal.description}</div>
    </li>
  );
};

export default MealCard;
