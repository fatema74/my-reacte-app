
import './App.css';
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Frinds from './Frinds';
// import Friend from './Friend';

function App() {
  function handleClick() {
    alert('button clicked')
  }

  const handleClick2 = () => {
    alert('button 2 clicked')
  }

  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h1>React Core Concepts</h1>
      <Users></Users>
      {/* <Friend></Friend> */}
      <Counter></Counter>
      <Team></Team>
      <Frinds></Frinds>

      <button onClick={handleClick}>Click Me</button>

      <button onClick={handleClick2}>Click Two</button>

      <button
        onClick={() => {
          alert('third click');
        }}
      >
        Click
      </button>

      <button onClick={() => addToFive(3)}>Fore</button>
    </>
  );
}

export default App;
