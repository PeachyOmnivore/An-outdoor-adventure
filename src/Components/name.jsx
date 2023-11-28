import { useNavigate } from "react-router-dom"


export default function Name() {

    const navigate = useNavigate()

    const handleChange = (event) => {
        sessionStorage.setItem("explorer", `${event.target.value}`)
    }

    return (
        <>
            <form className="page-container" action="">
                <label htmlFor="name">What is your name, adventurer?</label>
                <input
                    className="name-input"
                    type="text"
                    name="name"
                    onChange={(event)=> handleChange(event)}
                    placeholder="       Enter name here" />
                <button
                    onClick={() => navigate("/Adventure")}
                    type="submit"
                    className="selections">
                    Wake up</button>
            </form>
        </>
    )
}