import { useEffect, useReducer, useState } from "react";
import Redu from "./Redu";
import Mini from "./Mini";

const initalState = {
  score: 1
}

const reducer = (state,action) => {
  switch(action.type) {
    case 'UP':
      return {
        ...state,
        score: state.score + 1
      }
    case 'DOWN':
      return {
        ...state,
        score: state.score -1
      }
    default:
      return state;
  }
}

function App() {
  const [count, setCount] = useState(0);
  const [val, setVal] = useState(0);
  const [state,dispatch] = useReducer(reducer, initalState)

  console.log(typeof(dispatch))

  useEffect(() => {
    setCount((prev) => prev + 1);
  }, [val]);
  return (
    <div className="App">
      <Mini name="mini" color="red" age={20} />
      <Mini color="red" age={20}>
        안녕하세요
      </Mini>
      <Mini age={20} />
      <button type="button" onClick={() => setVal((prev) => prev + 1)}>
        클릭미
      </button>
      <h1>{state.score}</h1>
      <Redu dispatch={dispatch} />
    </div>
  );
}

export default App;
