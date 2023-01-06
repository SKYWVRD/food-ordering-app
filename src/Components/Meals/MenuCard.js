import MealCard from "./MealCard";
import classes from './MenuCard.module.css'

const MenuCard = (props) => {
  const mealsList = props.mealItems.map((meal) => (
    <MealCard mealItem={meal}  />
  ));

  return (
  <div className={classes.menu}>
    <ul >{mealsList}</ul>
  </div>
  );
};

export default MenuCard;
