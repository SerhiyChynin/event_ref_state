import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {
  let a = 5;
  let textInput = React.createRef();
  let textOut = React.createRef();
  const [output, setOutput] = useState('Hello');

  function f1(arg) {
    console.log('f1 work!' + arg);
  }
  function f2() {
    console.log('move!');
  }

  function showInput(event) {
    console.log('input');
    // console.log(this.value);  //!! Разобраться как работает
    // console.log(event.target.value)
    console.log(textInput.current.value)
    textOut.current.innerHTML = textInput.current.value;
    setOutput(textInput.current.value)
  }

  return (
    <div className="App">
      <section>
        <h1>События</h1>
        <h2>Button</h2>
        <button onClick={()=>f1(10)}>Push</button>
      </section>
      <section>
        <h2>DBL Click + Mouse move</h2>
        <div className="test" onDoubleClick={()=>f1(20)}></div>
      </section>
      <section>
        <h1>Input</h1>
        <input type="text" onInput={showInput} ref={textInput} defaultValue="Hi" placeholder="value..."/>
        <div className="out" ref={textOut}></div>
        <h3>{output}</h3>
      </section>
    </div>
  );
}

export default App;
