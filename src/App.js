import React from 'react';
import Chatbot from './chatbot';
import './App.css';

function App() {
  const style = {
    width: "50%",
    height:"0%",
    margin: "0 auto",
    marginTop: 150
  };
  return (
    <div className="App">
      <div style={style} className="chatbot">
        <Chatbot />
      </div>
    </div>

  );
}

export default App;
