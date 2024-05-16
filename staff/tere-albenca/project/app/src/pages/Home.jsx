import logic from "../logic";
import { useState, useEffect } from "react";
import { errors } from 'com';
import SearchWork from "../components/SearchWork";
import CreateWork from "../components/CreateWork";
import Works from "../components/Works";

const { ContentError, TypeError, RangeError } = errors;

function Home({ onUserLoggedOut, onHomeClick, onProfileClick }) {
  const [view, setView] = useState(null);
  const [refreshStamp, setRefreshStamp] = useState(null);
  const [user, setUser] = useState(null);
  const [works, setWorks] = useState(null);

  useEffect(() => {
    const fetchUserAndWorks = async () => {
      try {
        const user = await logic.retrieveUser();
        setUser(user);

        const works = await logic.retrieveWorks();
        setWorks(works);
      } catch (error) {
        console.error(error);
        let feedback = error.message;
        if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError) {
          feedback = `${feedback}, please correct it`;
        } else if (error instanceof MatchError) {
          feedback = `${feedback}, please verify credentials`;
        } else {
          feedback = 'Sorry, there was an error, please try again later';
        }
        alert(feedback);
      }
    };

    fetchUserAndWorks();
  }, []); // Dependency array ensures this runs only once

  const handleLogout = () => {
    logic.logoutUser();
    onUserLoggedOut();
  };

  const handleCreateClick = () => setView('createWork');

  const handleCancelClick = () => setView(null);

  const handleCreatedWork = () => {
    setView(null);
    setRefreshStamp(Date.now());
  };

  const handleHomeClick = (event) => {
    event.preventDefault();
    onHomeClick();
  };

  const handleProfileClick = () => {
    if (user && user.id) {
      onProfileClick(user.id);
    }
  };

  return (
    <div className="m-0 p-0 max-w-[100%]">
      <div>
        <header className="max-h-[50px] border-b border-black fixed top-0 left-0 w-full bg-[#00929E] box-border">
          <div className="flex justify-between">
            <div>
              <a onClick={handleHomeClick}>
                <img src="src/assets/images/logo-cabecera-alalluna.png" alt="logo alalluna" className="max-h-[45px]" />
              </a>
            </div>
            <div className="flex flex-row">
              <button onClick={handleCreateClick} className="w-10 h-10 mr-2.5 rounded-sm shadow cursor-pointer hover:bg-[lightgray]">➕</button>
              <a onClick={onProfileClick} className="w-10 h-10 mr-2.5 rounded-sm shadow cursor-pointer hover:bg-[lightgray]">
                <img src="src/assets/images/login.png" alt="perfil" className="max-h-[45px]" />
              </a>
            </div>
          </div>
        </header>
        <nav className="bg-[lightgray] mt-[50px] max-w-[100%] flex justify-center items-center">
          <div><SearchWork placeholder="Search title or name..." data={works} /></div>
        </nav>
        <main className="w-[100%] bg-[lightgray]">
          <Works user={user} refreshStamp={refreshStamp} onProfileClick={(targetUserId) => handleProfileClick(targetUserId)} />
          {view === 'createWork' && <CreateWork onWorkCreated={handleCreatedWork} onCancelClick={handleCancelClick} />}
        </main>
        <footer className="w-full bg-[white] p-3 px-1 fixed bottom-0 flex justify-between items-center left-0">
          <div></div>
          <div className="mr-[5px]">
            <button className="bg-[white] hover:bg-[gainsboro] text-{#333333} border-0 px-[10px] py-1 rounded-xl" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;
