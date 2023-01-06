import MealCard from "./MealCard";

const MenuCard = props => {
    const mealsList = props.mealItems.map((meal) => <li key={meal.id}>{meal.name}</li>);

    return (
        <ul>{mealsList}</ul>
    );
}

export default MenuCard