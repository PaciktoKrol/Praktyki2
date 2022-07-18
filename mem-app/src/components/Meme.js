export default function Meme(){
    return (
        <main className="Meme">
            <form className="Form">
            <input 
            className="Form--input"
            type='text'
            placeholder="Top next"
            ></input>
            <input 
            className="Form--input"
            type='text'
            placeholder="Bottom next"
            ></input>
            <button className="Form-button">Get a new meme image  🖼 </button>
            </form>
        </main>
    )
}