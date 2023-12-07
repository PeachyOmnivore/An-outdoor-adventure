/* eslint-disable react/prop-types */
import { useCallback, useEffect, useState } from "react"
import { textRenderer, toggleMute } from "../client"
import { Link } from "react-router-dom"

const idArray = []

export default function Adventure({ story, setStory, resetStory }) {

    const [currentPage, setCurrentPage] = useState()
    const [pageText, setPageText] = useState()

    const populateStory = useCallback((id, answer = null) => {
        if (answer && currentPage) {
            const updateStory = { ...story, selection: { ...story.selection, [currentPage.selectionKey]: answer } }
            setStory(updateStory)
        }

        if (id === -1) {
            resetStory()
            return
        }

        const result = story.pages.find(object => object.id === id)

        return setCurrentPage(result)

    }, [currentPage, story, setStory, resetStory])


    useEffect(() => {
        if (currentPage) return
        populateStory(1)
    }, [populateStory, currentPage])

    useEffect(() => {
        if (!currentPage) {
            return
        }
        idArray.push(currentPage.id)
        console.log("IDARRAY", idArray)
    }, [currentPage])


    useEffect(() => {
        if (currentPage) {
            const newText = textRenderer(currentPage.page, story.selection, currentPage.requiredSelections)
            setPageText(newText)
        }

        if (!currentPage || !story.selection[currentPage.selectionKey]) {
            return
        }

        const answer = story.selection[currentPage.selectionKey]

        const selectedOption = currentPage.options.find((option) => option.title === answer)
        console.log("selectedOptions", selectedOption)
        populateStory(selectedOption.goTo)

        console.log(currentPage.class)
    }, [currentPage, story, populateStory])


    return currentPage && pageText && (
        <>
            <div className={currentPage.class}>
                <audio autoPlay loop src={currentPage.audio}></audio>
                <p className="fadeInOne">{pageText}</p>
                <h3 className="question fadeInTwo">{currentPage.question}</h3>
                <div className="options-container">
                    {currentPage.options.map((option) => {
                        return <input
                            className="selections fadeInTwo"
                            key={option.title}
                            type="button"
                            value={option.title}
                            name={option.goTo}
                            onClick={() => { populateStory(option.goTo, option.title) }}
                        />
                    })}
                </div>
            </div>
            {/* <button onClick={() => toggleMute(pageAudio)}>Mute</button> */}
            <Link to="/Selections"><button className="yourSelections">Your Selections</button></Link>
        </>
    )
}