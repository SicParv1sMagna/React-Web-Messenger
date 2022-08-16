import React, { useState } from 'react';
import { Link } from "react-router-dom";

import '../Style.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input placeholder="Name" className="nameInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Room" className="roomInput" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className="joinButton" type="submit">Login</button>
        </Link>
        <footer>
          <a href = "https://github.com/SicParv1sMagna"><img className = "gitHub" src = "../Githubicon.png" alt = "githubImage"/></a>
        </footer>
      </div>
    </div>
  );
}