import { useEffect, useState } from "react"
import { theStory } from "../storyInformation"

export default function Adventure() {

    const [currentPage, setCurrentPage] = useState()

    const populateStory = (id) => {
        const result = theStory.find(object => object.id === id)
        return setCurrentPage(result)
    }

    useEffect(() => {
        populateStory(2)
    }, [])


    console.log(currentPage)

    return currentPage && (
        <div className="page-container">
            <p>{currentPage.page}</p>
            <form action="">
                {currentPage.options.map((option)=> {
                    <>
                    <label htmlFor="">{option.title}</label>
                    <input type="radio" value={option.title} />
                    </>
                })}
            </form>
        </div>
    )

}