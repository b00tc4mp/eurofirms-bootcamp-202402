import React, { useState, useEffect } from 'react';
import { errors } from 'com';
import logic from '../logic';
import Calendar from './Calendar.jsx';

const { ContentError, MatchError } = errors;

function Home({ onUserLoggedOut }) {
  const [user, setUser] = useState(null);
  const [refresh, setRefresh] = useState(Date.now());

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
  }, [refresh]);

  const handleLogout = () => {
    logic.logoutUser();
    onUserLoggedOut();
  };

  console.log('Home render');

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
      <header className="flex justify-between items-center bg-gray-400 p-4 shadow-md h-16">
        {!user && <p>Loading...</p>}
        {user && <h1 className="text-lg font-bold">Hello, {user.name}!</h1>}
        <nav>
          <button className="px-1 py-0,5 bg-blue-200 hover:bg-gray-400 rounded text-white" id="logout-button" onClick={handleLogout}>📟</button>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center flex-grow p-4">
        <div className="w-full max-w-screen-sm">
          <Calendar onUserAction={() => setRefresh(Date.now())} />
        </div>
      </main>

      <footer className="flex justify-center items-center bg-gray-400 p-3 shadow-md h-16">
      
      </footer>
    </div>
  );
}

export default Home;

