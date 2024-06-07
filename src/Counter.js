import React, { useState } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from './actions';
import './Counter.css';

const Counter = ({ count, increment, decrement, reset }) => {
  const [countColor, setCountColor] = useState('black'); // Initial color

  const generateRandomColor = () => {
    // Generate random RGB color values
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  };

  const handleIncrement = () => {
    increment();
    setCountColor(generateRandomColor()); // Set random color on increment
  };

  const handleDecrement = () => {
    decrement();
    setCountColor(generateRandomColor()); // Set random color on decrement
  };

  const handleReset = () => {
    reset(); 
    setCountColor('black'); 
  };



  return (
    <div>
      <h1 className='heading'>Counter: <span style={{ color: countColor , marginLeft: '40px' }}>{count}</span></h1>
      <div className='counterBtn'>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>
      <div className='resetBtn'>
      <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  count: state.count
});

const mapDispatchToProps = {
  increment,
  decrement,
  reset
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
