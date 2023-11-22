import { useState } from 'react'


function App() {
  const gifts = [
    'gift 1', 'gitf2', 'gift3'
  ]

  const [gift, setGift] = useState()

  const randomGift = () => {
    let index = Math.floor(Math.random() * gifts.length)
    setGift(gifts[index])
  }


  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const handleSubmit = () => {
    console.log({name, email});
  }
  
  const courses = [
    { id: 1, name: 'course 1'},
    { id: 2, name: 'course 2'},
    { id: 3, name: 'course 3'}
  ]
  const [checked, setChecked] = useState()
  return (
    <div className="App" style={{padding: 20}}>
      <h1>{gift || 'No reward yet'}</h1>
      <button onClick={randomGift}>Get reward</button>

      <div style={{padding: 50}}>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <button onClick={handleSubmit}>Register</button>
      </div>

      <div style={{padding: 100}}>
        {courses.map(course => {
          <div key={course.id}>
            <input
              value={course.name}
              onChange={() => {setChecked(course.id)}}
            />
            <h1>{course.name}</h1>
          </div>
        })}
      </div>

    </div>
  );
}

export default App;
