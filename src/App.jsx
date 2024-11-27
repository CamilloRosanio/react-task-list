import { useState } from 'react'
import './App.css'
import { tasks } from './assets/data/tasksData'



function App() {

  const listArray = (arr) => {
    return (
      <ul>
        {arr.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    );
  };

  const filterArray = (arr, state) => {
    const filteredTasks = arr.filter(item => item.state != state)
    return filteredTasks;
  };

  const filteredTasks = filterArray(tasks, 'completed');


  return (
    <>
      <header className='header'>
        <h1>My React project</h1>
      </header>

      <p>{tasks[0].state}</p>

      {listArray(tasks)}

      {listArray(filteredTasks)}
    </>
  )
}

export default App
