import { Link, useNavigate } from "react-router-dom"
import Adventure from "./adventure"

export default function Name() {

    const navigate = useNavigate()

    const handleChange = (event) => {
        localStorage.setItem("Explorer", `${event.target.value}`)

    }

    return (
        <>
            <form className="page-container" action="">
                <label htmlFor="name">What is your name explorer?</label>
                <input
                    type="text"
                    name="name"
                    onChange={(event)=> handleChange(event)}
                    placeholder="Enter name here" />
                <button
                    onClick={() => navigate("/Adventure")}
                    type="submit"
                    className="selections">
                    Wake up</button>
            </form>
        </>
    )
}