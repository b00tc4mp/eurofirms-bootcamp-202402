import { useState, useEffect } from 'react'
import { errors } from 'com'
import logic from '../logic'
import CalendarApp from './Calendar.jsx'

const { ContentError, MatchError } = errors;

function Home({ onUserLoggedOut }) {
  const [user, setUser] = useState(null);
  const [refresh, setRefresh] = useState(null);

  useEffect(() => {
    try {
      logic.retrieveUser()
        .then(user => setUser(user))
        .catch(error => {
          console.error(error.message);

          let feedback = error.message;

          if (error instanceof TypeError || error instanceof RangeError)
            feedback = `${feedback}, please correct it`;
          else
            feedback = 'sorry, there was an error, please try again later';

          alert(feedback);
        });
    } catch (error) {
      console.error(error.message);

      let feedback = error.message;

      if (error instanceof TypeError || error instanceof RangeError)
        feedback = `${feedback}, please correct it`;
      else
        feedback = 'sorry, there was an error, please try again later';

      alert(feedback);
    }
  }, []);

  const handleLogout = () => {
    logic.logoutUser();
    onUserLoggedOut();
  };

  console.log('Home render');

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-white">
      <header className="flex justify-between items-center border-b-2 border-gray-700 bg-gray-800 p-4 shadow-lg">
        {!user && <p>Loading...</p>}
        {user && <h1 className="text-lg font-bold">Hello, {user.name}!</h1>}
        <nav>
          <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded text-white" id="logout-button" onClick={handleLogout}>Logout</button>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center flex-grow p-4">
        <div className="w-full max-w-screen-sm">
          <CalendarApp onUserAction={()=>setRefresh(Date.now())} />
        </div>
      </main>

      <footer className="flex justify-center items-center border-t-2 border-gray-900 bg-gray-300 p-3 shadow-lg">
        <button className="px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded text-white">🏚️</button>
      </footer>
    </div>
  );
}

export default Home;

