import { useEffect, useState } from "react"
import { theStory } from "../storyInformation"

export default function Adventure() {

    const [currentPage, setCurrentPage] = useState()


    const populateStory = (id) => {
        const result = theStory.find(object => object.id === id)
        return setCurrentPage(result)
    }

    useEffect(() => {
        populateStory(1)
    }, [])


    console.log(currentPage)

    return currentPage && (
        <div className="page-container">
            <p>{currentPage.page}</p>
            <div className="options-container">
                {currentPage.options.map((option) => {
                    return <input 
                    className="selections"
                    key={option.title} 
                    type="button" 
                    value={option.title} 
                    name={option.goTo}
                    onClick={() => { populateStory(option.goTo) }}
                    />
                })}
            </div>
        </div>
    )

}