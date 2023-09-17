import { useState } from 'react'
import TextField from './components/TextField'
import AnimatedText from 'react-animated-text-content';
import './App.css'

function App() {
  const [input, setInput] = useState()
  const [animatedText, setAnimatedText] = useState("")
const handleChange = (e) => {
  setInput(e.target.value);
}
const  handleSubmit = (e) => {
  e.preventDefault()
  setAnimatedText(e.target.name.value)
}
  return (
    <>
     <div>
       <div className='mb-5 text-2xl'>Text Animation</div>
     </div>
     <div>
     <TextField 
     labelText="please input value" 
     inputType="text" 
     placeholder="Please enter something"
     values={input}
     onChange={handleChange}
     onSubmit={handleSubmit}
      />
     </div>
     <div className='mt-5 text-2xl'>
     {animatedText ? (<AnimatedText type="float" animationType="float" className='title'>{animatedText}</AnimatedText>) : null}  
     </div>


    </>
  )
}

export default App
