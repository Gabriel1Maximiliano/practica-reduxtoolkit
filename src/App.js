import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,incrementByAmount } from '../src/store/slices/counter/counterSlice'

export function App() {
  const count = useSelector((state) => state.counter.counter)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <br></br>
        {
          console.log(count)
        }
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(incrementByAmount(2))}
        >
          incrementBy
          </button>
      </div>
    </div>
  )
}