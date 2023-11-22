import { useState } from 'react'


function App() {
  const [job, setJob] = useState('')
  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem('jobs'))
    console.log(storageJobs);
    return storageJobs
  })
  const handleSubmit = () => {
    setJobs(prev => {
      const jsonJobs = JSON.stringify([...prev, job])

      // Save to local storage
      localStorage.setItem('jobs', jsonJobs)
      return [...prev, job]
    })
    setJob('')
  }
  return (
    <div className="App" style={{padding: 20}}>
      <input
        value={job}
        onChange={e => setJob(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
        <li key={index}>
          {job}
        </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
