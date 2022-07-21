import React from "react"
import memesData from "../memesData"

export default function Meme(){

    // const [memeImage,setMemeImage] = React.useState("")
    const [meme,setMeme] = React.useState({
      topText:"",
      bottomText:"" ,
      randomImage:"https://i.imgflip.com/30b1gx.jpg" 
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    function randomMeme(){

                const memesArray = memesData.data.memes
                const randomNumber = Math.floor(Math.random()* memesArray.length)
                const url = memesArray[randomNumber].url
                setMeme(prevMeme =>({
                    ...prevMeme,
                    randomImage:url

                }))

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
            <img src={meme.randomImage} className="meme--image"></img>
        </main>
    )
}