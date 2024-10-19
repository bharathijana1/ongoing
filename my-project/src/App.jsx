import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StepperHome from './components/StepperHome'
import { FormValidationUsingSchema } from './components/FormValidationUsingSchema'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
    <StepperHome />
    {/* <FormValidationUsingSchema /> */}
    </>
  )
}

export default App
