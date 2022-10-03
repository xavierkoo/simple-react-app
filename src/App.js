import { useState } from 'react'
import Button from './components/Button'
import Header from './components/Header'
import Display from './components/Display'
import './style.css'

const App = () => {
  const [current, setCurrent] = useState('') 
  
  const imageSelect = (event) => {
    event.preventDefault()
    setCurrent(event.target.value)
  }

  return (
    <div>
      <div className="btns">
        <Button name="Mountain" imageSelect={imageSelect}/>
        <Button name="Beaches" imageSelect={imageSelect}/>
        <Button name="Birds" imageSelect={imageSelect}/>
        <Button name="Food" imageSelect={imageSelect}/>
      </div>
      
      <Header name={current}/>
      <Display current={current} />
    </div>
  )
}

export default App