import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const App = () => {

  const colorbg = '#34495e';
  const [bg, setbg] = useState(colorbg);

  const hashim = 'clich here';
  const [clk, setname] = useState(hashim);

  const bgground = () => {

    const coloorbg = '#7f1010';
    setbg(coloorbg);

    const newhashim = "hashim 🐺 ";
    setname(newhashim);
  }
  const onmouse = () => {
    const hh = "oucih 😄";
    setname(hh);
    const mycor = '#b67116';
    setbg(mycor);
  }
  const live= ()=>{
    const hashim = 'clich here';
    setbg(hashim);
    const colorbg = '#34495e';
    setbg(colorbg)

  }
  const hashh =()=>{
         const color='#ff0000';
         setbg(color);
         const hashim='Hello ❤️'
         setname(hashim);
  }
  return (
    <>
      <div className="hashim" style={{ backgroundColor: bg }}>
        <button onClick={bgground} onMouseOver={onmouse} onMouseLeave={live} onDoubleClick={hashh}>{clk} </button>
      </div>
    </>
  );
}

export default App;
