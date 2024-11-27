import { useState } from 'react'
import './App.css'
import './assets/data/tasksData'
import { tasks } from './assets/data/tasksData'

function App() {

  return (
    <>
      <h1>My React project</h1>
      <p>{tasks[0].state}</p>
    </>
  )
}

export default App
