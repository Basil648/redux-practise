import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { change ,reset} from './redux/quoteSlice'


function App() {
  const dispatch = useDispatch()
  const dispquote = useSelector((state) => state.quote1.proverb1)
  return (
    <>

      <h1>proverb changer</h1>
      <h2> todays proverb:{dispquote}</h2>
      <button onClick={() => dispatch(change())}>give me a proverb</button>
      <button onClick={() => dispatch(reset())}>reset</button>
    </>
  )
}

export default App