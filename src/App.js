import { useState, useRef } from "react";
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faSubtract, faXmark, faArrowsRotate, faDivide } from '@fortawesome/free-solid-svg-icons';

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  };

  function minus(e) {
    e.preventDefault();
    const inputNumber = Number(inputRef.current.value);
    setResult(result => result - inputNumber)
  };

  function times(e) {
    e.preventDefault();
    const inputNumber = Number(inputRef.current.value);
    setResult(result => result * inputNumber)
  };

  function divide(e) {
    e.preventDefault();
    const inputNumber = Number(inputRef.current.value);
    setResult(result => result / inputNumber)
  };

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value= ''
  };
 
  function resetResult(e) {
    e.preventDefault();
    setResult(0)
  }; 
 
  return ( 
    <div className="App card container"> 
      <div className="card-header"> 
        <h1 className="card-title">Simplest Calculator</h1> 
      </div> 
      <div className="card-content">
        <div className="content">
          <p ref={resultRef}> 
            { result }
          </p> 
          <input
            pattern="[0-9]" 
            ref={inputRef} 
            type="number" 
            placeholder="Type a number"
            className="input" 
          /> 
        </div>
      </div>
        <footer className="card-footer">
          <button className='button is-rounded is-medium is-light is-info card-footer-item'onClick={plus}>
              <FontAwesomeIcon icon={faCirclePlus} />
              <span class="icon-text pl-2">Add</span>
            </button>
          <button className='button is-rounded is-inverted is-medium is-light is-success  card-footer-item'onClick={minus}>
            <FontAwesomeIcon icon={faSubtract} />
            <span class="icon-text pl-2">Subtract</span>
          </button>
          <button className='button is-rounded is-inverted is-medium is-light is-info card-footer-item'onClick={times}>
            <FontAwesomeIcon icon={faXmark} />
            <span class="icon-text pl-2">Multiply</span>
            </button>
          <button className='button is-rounded is-medium is-light is-success card-footer-item'onClick={divide}>
            <FontAwesomeIcon icon={faDivide} />
            <span class="icon-text pl-2">Divide</span>
          </button>
          <button className='button is-rounded is-medium is-dark card-footer-item'onClick={resetInput}>
            <FontAwesomeIcon icon={faArrowsRotate} />
            <span class="icon-text pl-2">Reset Input</span>
          </button>
          <button className='button is-rounded is-medium is-dark card-footer-item'onClick={resetResult}>
            <FontAwesomeIcon icon={faArrowsRotate} />
            <span class="icon-text pl-2">Reset Solution</span>
          </button>
        </footer>
    </div> 
  ); 
} 
 
export default App;
