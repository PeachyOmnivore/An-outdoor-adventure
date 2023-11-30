/* eslint-disable react/prop-types */
import { useCallback, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { textRenderer } from "../storyInformation"

export default function Adventure({ story, setStory }) {

    const [currentPage, setCurrentPage] = useState()
    const navigate = useNavigate()

    const populateStory = useCallback((id, answer = null) => {
        if (answer && currentPage) {
            const updateStory = { ...story, selection: { ...story.selection, [currentPage.selectionKey]: answer } }
            setStory(updateStory)
        }

        if (id === -1) {
            navigate("/")
            return
        }

        const result = story.pages.find(object => object.id === id)
        return setCurrentPage(result)

    }, [currentPage, story, setStory, navigate])


    useEffect(() => {
        if (currentPage) return
        populateStory(1)
    }, [populateStory, currentPage])


    useEffect(() => {
        if (!currentPage || !story.selection[currentPage.selectionKey]) {
            return
        }
        
        const answer = story.selection[currentPage.selectionKey]
        console.log("ANSWER",answer)

        const selectedOption = currentPage.options.find((option) => option.title === answer)
        populateStory(selectedOption.goTo)
    }, [currentPage, story, populateStory])

    console.log("CURRENT PAGE STATE", currentPage)


    return currentPage && (
        <div className="page-container">
            <p>{textRenderer(currentPage.page, story.selection)}</p>
            <h3 className="question fadeIn">{currentPage.question}</h3>
            <div className="options-container">
                {currentPage.options.map((option) => {
                    return <input
                        className="selections"
                        key={option.title}
                        type="button"
                        value={option.title}
                        name={option.goTo}
                        onClick={() => { populateStory(option.goTo, option.title) }}
                    />
                })}
            </div>
        </div>
    )
}