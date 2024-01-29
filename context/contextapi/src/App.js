import './App.css';
import Counter from './Counter';
import { useContext } from 'react';
import { CounterContext } from './context/Counter';
function App() {
  const counterState = useContext(CounterContext);
  // console.log(counterState)
  return (
    <div className="App">
      <h1> Count is :{counterState.count}</h1>
  <Counter/>
  <Counter/>
  <Counter/>
  <Counter/>
  <Counter/>

    </div>
  );
}

export default App;
