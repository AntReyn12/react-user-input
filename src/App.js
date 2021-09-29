import React, {useState} from "react";
import "./App.css";

const App = () => {
  const [word, setWord] = useState("");
  const [value, setValue] = useState(false);

  const getData = (props) => {
    const {target} = props;
    const {value} = target;
    setWord(value);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{marginBottom: "200px"}}>User Input</h1>
        {value ? (
          <div>
            <h1>{word}</h1>
            <button style={{margin: "25px"}} onClick={() => setValue(false)}>
              Hide value
            </button>
          </div>
        ) : (
          <div>
            <button style={{margin: "25px"}} onClick={() => setValue(true)}>
              Show value
            </button>
          </div>
        )}
        <input type="text" onChange={getData} />
      </header>
    </div>
  );
};

export default App;
