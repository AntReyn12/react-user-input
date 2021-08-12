import React, {useState} from "react";
import "./App.css";

const App = () => {
  const [word, setWord] = useState();
  const [value, setValue] = useState(false);

  const getData = (props) => {
    const {target} = props;
    const {value} = target;
    setWord(value);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>User Input</h1>
        {value ? <h1>{word}</h1> : null}
        <input type="text" onChange={getData} />
        <button style={{margin: "20px"}} onClick={() => setValue(true)}>
          Show value
        </button>
        <button style={{margin: "20px"}} onClick={() => setValue(false)}>
          Hide value
        </button>
      </header>
    </div>
  );
};

export default App;
