import CalorieCalculator from "./CalculateCalories"
import FoodTable from "./FoodTable"
import ExampleMeal from "./ExampleMeal"
import TraineesList from "./TraineesList"
import TrainerList from "./TrainerList"
import logic from '../logic'


function HomeContent() {
    const userRole = logic.getLoggedInUserRole() // Obtengo el rol del usuario en este momento

    return <>
        {/* <UsersList /> */}
        {userRole === 'trainer' && <TraineesList />}
        {userRole === 'trainee' && <TrainerList />}

        <CalorieCalculator />
        <ExampleMeal />
        <FoodTable />
    </>
}

export default HomeContent