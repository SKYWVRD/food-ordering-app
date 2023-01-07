import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  return (
    <form>
      <input className={classes.quantity} type="number"></input>
      <button>Add</button>
    </form>
  );
};

export default MealItemForm;
