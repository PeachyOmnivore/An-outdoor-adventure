import { Link } from "react-router-dom";


export default function StoryStart() {
    return (
    <div className="startAndName fadeInOne">
        <h1>Welcome to your outdoor story.</h1>
        <p>This is an interactive story that takes us on an adventure. This is your story, it is tailored by your decisions. So are you ready?</p>
        <Link className="start-link" to="/Name"><button className="selections">Lets go!</button></Link>
    </div>)
}