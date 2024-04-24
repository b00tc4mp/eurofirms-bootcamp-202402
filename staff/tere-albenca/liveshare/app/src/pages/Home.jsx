import logic from "../logic";
import { useState, useEffect } from "react";

import CreatePost from "../components/CreatePost";
import Posts from "../components/Posts";

// import Chat from "../components/Chat"

function Home({ onUserLoggedOut }) {
  const [view, setView] = useState(null);
  const [refreshStamp,setrefreshStamp] = useState(null)
  const [user,setuser] = useState(null)

  useEffect(()=>{
    try {
      logic.retrieveUser()
        .then(user =>setuser(user))
        .catch(error =>{
          console.error(error)

          alert(error.message)
        })

    } catch (error) {
      console.error(error);
  
      alert(error.message);
    }

  }, [])

  const handleLogout = () => {
    logic.logoutUser();

    onUserLoggedOut();
  };

  const handleCreateClick = () => setView('createPost');


  const handleCancelClick = () => setView(null);


  const handleCreatedPost = () => {
    setView(null)
    setrefreshStamp(Date.now())
  };

  return (
    <>
    <div className="m-0 p-0 max-w-[100vw] mt-[70px] mb-[60px]">
    <header className="flex justify-between border-b border-black fixed top-0 w-full bg-[grey] h-12 py-[5px] px-1 box-border">
        <img
          src="src/assets/images/logo-cabecera-alalluna.png"
          alt="logo alalluna"
        />

        <nav className="flex items-center justify-end w-1/2">
          <button id="chat-button" className="w-10 h-10 mr-2.5 rounded-sm shadow cursor-pointer hover:bg-[lightgray]">💬</button>
          <button id="posts-button" className="w-10 h-10 mr-2.5 rounded-sm shadow cursor-pointer hover:bg-[lightgray]">🏚️</button>
          <button id="create-post-button" onClick={handleCreateClick} className="w-10 h-10 mr-2.5 rounded-sm shadow cursor-pointer hover:bg-[lightgray]">+</button>
        </nav>
      </header>

      <div >
            <h1 className="text-center">Welcome,  {user ? user.username:'Loading'}!</h1>
        </div>

      <main>
        <Posts refreshStamp={refreshStamp}/>
        {view === "createPost" && <CreatePost onPostCreated={() => handleCreateClick()} onCancelClick={() => handleCancelClick()}/>}
      </main>
      {/* <Posts /> */}
      <footer className="w-full bg-[dimgrey] text-[white] p-3 px-1 fixed bottom-0  flex justify-between items-center">
        <div>&copy; 2024 Alalluna</div>
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
