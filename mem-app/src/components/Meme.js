import React from "react"
import memesData from "../memesData"

export default function Meme(){

    const [memeImage,setMemeImage] = React.useState("")
    
    function randomMeme(){

                const memesArray = memesData.data.memes
                const randomNumber = Math.floor(Math.random()* memesArray.length)
                setMemeImage(memesArray[randomNumber].url)

    }
    return (
        <main className="Meme">
            <div className="Form">
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
            <button onClick={randomMeme} className="Form-button">Get a new meme image  🖼 </button>
            </div>
            <img src={memeImage} className="meme--image"></img>
        </main>
    )
}