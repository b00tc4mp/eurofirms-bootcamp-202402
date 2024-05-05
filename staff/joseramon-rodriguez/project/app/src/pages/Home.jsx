import Button from '../components/Button'
import logic from '../logic'

function Home({ onLogoutClick }) {
    const handleLogoutClick = () => {
        logic.logoutUser()

        onLogoutClick()
    }
    return <>
        HELLO HOME
        <Button onClick={handleLogoutClick}>Log OUT</Button>
    </>
}

export default Home