import './App.css'
import StoryStart from './Components/storyStart'
import Adventure from './Components/adventure'
import Name from './Components/name'
import { Routes, Route } from "react-router-dom"
import { useState } from 'react'
import { theStory } from './storyInformation'


const savedStoryString  = localStorage.getItem("story")
const savedStory = savedStoryString? JSON.parse(savedStoryString) : null



function App() {

  const [story, setStory] = useState(savedStory || theStory)

  const updateStory = (obj) => {
    setStory(obj)
    localStorage.setItem("story", JSON.stringify(obj))
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<StoryStart />} />
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
              setStory={updateStory} />} />
      </Routes>
    </>
  )
}

export default App
