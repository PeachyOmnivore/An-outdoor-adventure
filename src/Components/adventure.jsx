/* eslint-disable react/prop-types */
import { useCallback, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { textRenderer } from "../client"

const idArray = []

export default function Adventure({ story, setStory, resetStory}) {

    const [currentPage, setCurrentPage] = useState()
    const navigate = useNavigate()
    console.log(story)

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

    }, [currentPage, story, setStory, navigate])


    useEffect(() => {
        if (currentPage) return
        populateStory(1)
    }, [populateStory, currentPage])

    useEffect(() => {
        if (!currentPage) {
            return
        }
        idArray.push(currentPage.id)
        console.log("IDARRAY",idArray)
    }, [currentPage])


    useEffect(() => {
        if (!currentPage || !story.selection[currentPage.selectionKey]) {
            return
        }

        const answer = story.selection[currentPage.selectionKey]
        console.log("ANSWER" ,answer)
        const selectedOption = currentPage.options.find((option) => option.title === answer)
        console.log("selectedOptions", selectedOption)
        populateStory(selectedOption.goTo)

    }, [currentPage, story, populateStory])


    return currentPage && (
        <div className="page-container fadeInOne">
            <p>{textRenderer(currentPage.page, story.selection, currentPage.requiredSelections)}</p>
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
    )
}