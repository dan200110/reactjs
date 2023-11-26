import { useState, useReducer } from 'react'

// useState
// 1. Init state: 0
// 2. Actions: Up (state + 1) / Down (state - 1)

// useReducer
// 1. Init state: 0
// 2. Actions: Up (state + 1) / Down (state - 1)
// 3. Reducer
// 4. Dispatch

//Init state
const initState = {
  job: '',
  jobs: []
}

// Actions
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

const setJob = payload => {
  return {
    type: SET_JOB,
    payload
  }
}

const addJob = payload => {
  return {
    type: ADD_JOB,
    payload
  }
}

console.log(setJob);
// Reducer
const reducer = (state, action) => {
  console.log('Actions', action);
  console.log('Prev state', state);

  switch(action.type) {
    case SET_JOB:
      return {
        ...state,
        job: action.payload
      }
      break
    case ADD_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload]
      }
      break
    default:
      throw new Error('Invalid action')
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initState)
  const {job, jobs} = state

  const handleSubmit = () => {
    dispatch(addJob(job))
  }
  return (
    <div>
      <h3>Todo</h3>
      <input
        value={job}
        placeholder='Enter todo...'
        onChange={e => {
          dispatch(setJob(e.target.value))
        }}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => {
          <li key={index}>{job} &times;</li>
        })}
      </ul>
    </div>
  )
}

export default App;
