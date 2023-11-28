import Adventure from "./adventure"

export default function Name() {
    return (
        <>
            <form onSubmit={<Adventure/>} action="">
                <label htmlFor="name">What is your name explorer?</label>
                <input type="text" name="name" />
                <button>Wake up</button>
            </form>
        </>
    )
}