import './App.css'
import Counter from './counter'

function App() {

  function handleClick() {
    alert('Button clicked')
    console.log('Button clicked')
  }
  
  const addToFive = (num) => {
    alert(num + 5)
  }

  return (
    <>
      <h1>React core concepts 2</h1>
      <Counter></Counter>


      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => {
        alert('Button clicked2')
        console.log('Button clicked2')
      }}>Click2</button>
      {/* bhejailla */}
      <button onClick={() => addToFive(4)}>Four</button>
    </>
  )
}

export default App
