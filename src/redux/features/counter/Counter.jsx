import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, reset, incrementByAmount } from "./counterSlice"
import { useState, useRef } from "react"

const Counter = () => {
  const [amount, setAmount] = useState(0)
  const inputRef = useRef(null)
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()

  const resetAll = () => {
    inputRef.current.value = 0
    dispatch(reset())
  }

  return (
    <section>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <input
        ref={inputRef}
        type="number"
        onChange={(e) => setAmount(e.target.value)}
        defaultValue={0}
      />
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(incrementByAmount(Number(amount)))}>IncrementByAmount</button>
        <button onClick={resetAll}>Reset</button>
      </div>
    </section>
  )
}

export default Counter