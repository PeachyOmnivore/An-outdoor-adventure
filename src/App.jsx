import './App.css'
import StoryStart from './Components/storyStart.jsx'
import Adventure from './Components/adventure.jsx'
import Selections from './Components/selections.jsx'
import Name from './Components/name'
import { Routes, Route, useNavigate } from "react-router-dom"
import { useState } from 'react'
import { theStory } from './storyInformation'


const savedStoryString = localStorage.getItem("story")
const savedStory = savedStoryString ? JSON.parse(savedStoryString) : null

function App() {

  const [story, setStory] = useState(savedStory || theStory)
  const navigate = useNavigate()

  const updateStory = (obj) => {
    setStory(obj)
    localStorage.setItem("story", JSON.stringify(obj))
  }

  const resetStory = () => {
    localStorage.clear()
    const updateStory = { ...story, selection: {}, }
    setStory(updateStory)
    navigate("/")
  }

  return (
    <>
      <button onClick={resetStory} className='restart'>Restart Story</button>
      <Routes>
        <Route path='/' element={<StoryStart story={story}/>} />
        <Route
          path='/Name'
          element={
            <Name
              setStory={updateStory}
              story={story} />} />
        <Route
          path='/Adventure'
          element={
            <Adventure
              story={story}
              setStory={updateStory}
              resetStory = {resetStory}/>} 
            />
            <Route 
            path='/Selections'
            element= {<Selections navigate = {navigate} story={story}/>}
            />
      </Routes>
    </>
  )
}

export default App
