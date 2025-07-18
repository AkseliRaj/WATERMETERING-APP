import React, { useState } from 'react';
import './App.css';
import SignIn from './components/SignIn';
import VesimittariForm from './components/VesimittariForm';
import AdminPanel from './components/AdminPanel';

function App() {
  const [user, setUser] = useState(null);

  const handleSignIn = (userData) => {
    setUser(userData);
  };

  const handleSignOut = () => {
    setUser(null);
  };

  // Show sign-in page if not logged in
  if (!user) {
    return (
      <div className="App">
        <SignIn onSignIn={handleSignIn} />
      </div>
    );
  }

  // Show admin panel if admin user
  if (user.isAdmin) {
    return (
      <div className="App">
        <AdminPanel onSignOut={handleSignOut} />
      </div>
    );
  }

  // Show water meter form for regular users
  return (
    <div className="App">
      <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
        <h4>Tervetuloa, {user.username}!</h4>
        <button className="btn btn-outline-secondary" onClick={handleSignOut}>
          Kirjaudu ulos
        </button>
      </div>
      <VesimittariForm />
    </div>
  );
}

export default App;
