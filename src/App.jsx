import { useState } from 'react'
import './App.css'
import { tasks } from './assets/data/tasksData'

function App() {

  return (
    <>
      <h1>My React project</h1>
      <p>{tasks[0].state}</p>

      <ul>
        {tasks.map((task) => <li key={task.id}>{task.title}</li>)}
      </ul>
    </>
  )
}

export default App
