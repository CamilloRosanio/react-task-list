import { useState } from 'react'
import './App.css'
import { tasks } from './assets/data/tasksData'



function App() {

  const listArray = (arr) => {
    return (
      <ul className="list-unstyled">
        {arr.map((item) => (
          <li key={item.id} className='mb-3'>
            <div className='d-flex align-items-center'>
              <p className='my-1'><b>{item.title}</b> </p>
              <span className={`state-label ${item.state} mx-3 px-3 py-1 rounded`}>{item.state}</span>
            </div>

            <p className='detail m-0'>Priority: {item.priority}</p>
            <p className='detail m-0'>Estimated time: {item.estimatedTime}</p>
          </li>
        ))}
      </ul>
    );
  };

  const filterStateArray = (arr, state) => {
    const filteredTasks = arr.filter(item => item.state == state)
    return filteredTasks;
  };

  const filterNotStateArray = (arr, state) => {
    const filteredTasks = arr.filter(item => item.state != state)
    return filteredTasks;
  };

  const completedTasks = filterStateArray(tasks, 'completed');
  const notCompletedTasks = filterNotStateArray(tasks, 'completed');


  return (
    <>
      <header className='header p-5'>
        <div className='container'>
          <h1>Task Manager</h1>
        </div>
      </header>

      <div className='container'>
        <h3 className='h4 my-4'>Current Tasks ({notCompletedTasks.length})</h3>
        <div className='mb-4'>
          {listArray(notCompletedTasks)}
        </div>

        <hr />

        <h3 className='h4 my-4'>Completed Tasks ({completedTasks.length})</h3>
        <div className='mb-4'>
          {listArray(completedTasks)}
        </div>
        <hr />
      </div>

    </>
  )
}

export default App
