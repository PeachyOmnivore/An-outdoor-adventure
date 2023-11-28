import './App.css'
import StoryStart from './Components/storyStart'
import Adventure from './Components/adventure'
import Name from './Components/name'
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element= {<StoryStart/>} />
      <Route path='/Name' element= {<Name/>} />
      <Route path='/Adventure' element= {<Adventure/>} />
      </Routes>
    </>
  )
}
 
export default App
