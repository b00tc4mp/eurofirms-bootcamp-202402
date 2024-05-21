import UsersList from "./UsersList"
import CalorieCalculator from "./CalculateCalories"
import FoodTable from "./FoodTable"
import ExampleMeal from "./ExampleMeal"

function HomeContent() {
    return <>
        <UsersList />
        <CalorieCalculator />
        <ExampleMeal />
        <FoodTable />
    </>
}

export default HomeContent