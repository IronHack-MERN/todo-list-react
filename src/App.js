import React from 'react';
import todoimg from './todolist.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List App</h1>
        <img src={todoimg} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
