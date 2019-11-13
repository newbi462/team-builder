import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {
      name: "Russ",
      email: "test@test.io",
      role: "LS Full Satack"
    }
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {teamMembers.map(item => (
          <div className="teamcard">
            <p>{item.name}</p>
            <p>{item.email}</p>
            <p>{item.role}</p>
          </div>
        ))}

      </header>
    </div>
  );
}

export default App;
