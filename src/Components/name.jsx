/* eslint-disable react/prop-types */
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


export default function Name({ setStory, story }) {


    
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        const updateStory = {...story, selection: {...story.selection, name: event.target[0].value}}
        setStory(updateStory)
    }


    useEffect(() => {
        console.log(story)
        if (!story.selection.name) {
            return
        }
        console.log(story)
        navigate("/Adventure")

    }, [navigate, story])


    return (
        <>
            <form onSubmit={(event) => handleSubmit(event)} className="page-container" action="">
                <label>What is your name, adventurer?</label>
                <input
                    className="name-input"
                    type="text"
                    name="name"
                    placeholder="       Enter name here"
                />
                <button
                    type="submit"
                    className="selections">
                    Wake up
                </button>
            </form>
        </>
    )
}