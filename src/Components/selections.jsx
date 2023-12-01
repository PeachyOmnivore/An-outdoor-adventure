/* eslint-disable react/prop-types */


export default function Selections({ story }) {

    console.log(story.selection)

    return story.selection && (
        <>
            <div className="selectionsPage">
                <h1>Your Selections</h1>
                <ul>
                    {Object.entries(story.selection).map(([key, value]) => (
                        (key !== "" && value !== "Continue") && (
                            <li className="selectionItems" key={key}>
                                <strong>{key.toUpperCase()}:</strong><br />{value}
                            </li>)
                    ))}
                </ul>
            </div>
        </>
    )
}