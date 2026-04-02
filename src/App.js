import { useState, useRef } from "react";
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faSubtract, faXmark, faArrowsRotate, faDivide } from '@fortawesome/free-solid-svg-icons';
import  calculator  from './assets/calculator.jpg';

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
      <div class="card-image">
        <figure className="image" style={{height: '96px', opacity: 0.5, zIndex: 0}}>
          <img src={calculator} alt="Placeholder image"/>
        </figure>
      </div>
      <div className="card-header"> 
        <h1 className="card-title is-size-1 has-text-justified is-italic has-text-primary pl-2">Simplest Calculator</h1> 
      </div> 
      <div className="card-content">
        <div className="content">
          <div className="box ">
            <p ref={resultRef} className="is-size-2 has-text-centered has-text-weight-bold is-family-monospace has-text-warning"> 
              { result }
            </p> 
          </div>
          <input
            pattern="[0-9]" 
            ref={inputRef} 
            type="number" 
            placeholder="Type a number"
            className="input is-rounded is-medium is-light is-info" 
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
