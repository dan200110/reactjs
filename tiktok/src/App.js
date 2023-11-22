import { useState } from 'react'

const orders = [100, 200, 300]
function App() {
  const [counter, setCounter] = useState(() => {
    return orders.reduce((total, cur) => total + cur)
  })
  const handleIncrease = () => {
    setCounter(prevState => prevState + 1)
  }

  const [info, setInfo] = useState({
    name: 'Nguyen Van A',
    age: 15,
    address: 'ha noi'
  })

  const handleUpdate = () => {
    setInfo({
      ...info,
      bio: 'Add more detail'
    })
  }
  return (
    <div className="App" style={{padding: 20}}>

      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleUpdate}>Update</button>
      <h1>{JSON.stringify(info)}</h1>
    </div>
  );
}

export default App;

// Luu y:
// - Component được re-render sau khi 'setState'
// - Initial state với callback?
// - Set state với callback?
// - Initial state với callback?
// - Set state là thay thế state bằng giá trị mới
