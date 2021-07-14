import React from 'react';
import './App.css';
import Sidebar from './sidebar';
import Chat from "./Chat.js"

function App() {
  return (
    <div className="app">
      <div className="app_body">
        {/* Now we will build Whatsapp-mern 🎆 */}
        < Sidebar />
        {/* as esss component ko import krne k liyeh simply press ctrl+spacebar */}
        <Chat />

      </div>
     
    </div>
  );
}

export default App;
