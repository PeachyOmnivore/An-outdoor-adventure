import { Link } from "react-router-dom";


export default function StoryStart() {
    return (
    <div className="page-container">
        <h1>Welcome to an outdoor adventure</h1>
        <p>This is a story that take us outside and on an adventure. This is your story and is tailored by your decisions. So are you ready?</p>
        <Link className="start-link" to="/Name"><button className="selections">Lets go!</button></Link>
    </div>)
}