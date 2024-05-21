import SearchDiet from "./SearchDiet"
import SearchExercise from "./SearchExercise"
import UsersList from "./UsersList"
import Exercises from "../components/Exercises";
import Diets from "../components/Diets";


// TODO IMPLEMENTAR DIETS EXERCISES
function HomeContent() {
    return <>
        <UsersList />
        <SearchDiet />
        {/* <Diets /> */}
        <SearchExercise />
        {/* <Exercises /> */}


    </>
}

export default HomeContent