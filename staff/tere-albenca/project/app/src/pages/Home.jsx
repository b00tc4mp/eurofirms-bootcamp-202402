import logic from "../logic";
import { useState, useEffect } from "react"
import { errors } from 'com'


const { ContentError, TypeError, RangeError } = errors

// import Chat from "../components/Chat"

function Home({ onUserLoggedOut }) {
  const [view, setView] = useState(null);
  const [refreshStamp,setRefreshStamp] = useState(null)
  const [user,setuser] = useState(null)

  useEffect(()=>{
    try {
      logic.retrieveUser()
        .then(user =>setuser(user))
        .catch(error =>{
          console.error(error)

          let feedback = error.message

          if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
            feedback = `${feedback},please correct it`

          else if (error instanceof MatchError)
            feedback = `${feedback},please verify credentials`

          else
            feedback = 'sorry, there was an error, please try again later'

          alert(feedback)
        })

    } catch (error) {
      console.error(error);
  
      let feedback = error.message

          if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
            feedback = `${feedback},please correct it`

          else
            feedback = 'sorry, there was an error, please try again later'

          alert(feedback)
    }

  }, [])

  const handleLogout = () => {
    logic.logoutUser();

    onUserLoggedOut();
  };


  return (
    <>
    <div className="m-0 p-0 max-w-[100%] mt-[70px] mb-[60px]">
    <header className="flex justify-between border-b border-black fixed top-0 left-0 w-full bg-[#00929E] h-16 box-border">
        <img
          src="src/assets/images/logo-cabecera-alalluna.png"
          alt="logo alalluna"
        />

        <nav className="flex items-center justify-end w-[100%">
         
        </nav>
      </header>

      <div >
            <h1 className="text-center">Welcome,  {user ? user.name:'Loading'}!</h1>
        </div>

      <main>
       

      </main>
      
      <footer className="w-full bg-[white] p-3 px-1 fixed bottom-0  flex justify-between items-center left-0">
        <div>

        </div>
        <div className="mr-[20px]">
          <button className="bg-[white] hover:bg-[gainsboro] text-{#333333} border-0 px-[20px] py-3 rounded-xl" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </footer>
    </div>
    </>
  );
}
export default Home;