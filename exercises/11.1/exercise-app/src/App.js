import React from 'react';
import './App.css';


const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['Dormir', 'Acordar', 'Estudar', 'Exercicios'];

function App() {
  return (
    <div className="App">
    <ul>{ tasks.map(task => Task(task)) } </ul>
    </div>
  );
}

export default App;
