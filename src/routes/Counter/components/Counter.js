/* eslint-disable no-unused-vars */
import React, { Component, PropTypes } from 'react'

const Counter = ({ counter, onIncrement, onDecrement, onIncrementAsync }) =>
  <div>
    <button onClick={onIncrement}>
      Increment
    </button>
    {' '}
    <button onClick={onDecrement}>
      Decrement
    </button>
    <hr />
    {' '}
    <button onClick={onIncrementAsync}>Increment after 1 second</button>
    <hr />
    <div>
      Clicked: {counter} times
    </div>
  </div>

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrementAsync: PropTypes.func.isRequired
}

export default Counter
