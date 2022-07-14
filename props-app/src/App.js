import React from "react"
import Joke from "./components/Joke"
import "/Users/michal/props-app/src/style.css"

export default function App(){
    const colors=["Red","Orange","Yellow","Blue","Indigo","Violet"].map((z)=>{
        return <h3>{z}</h3>
    })
    return(
        <div>
            {colors}

            {/* <Joke
            setup="Setup: I got my daughter a fridge for her birthday."
            punchline="Punchline: Setup: I can't wait to see her face light up when she opens it."
            isPun={true}
            upvotes={10}
            downvotes={2}
            comments={[{author:"",body:"",title: ""}]}
            />
             <Joke
            setup="Setup: How did the hacker escape the police?"
            punchline="Punchline: He just ransomware!"
            isPun={true}
            />
            <Joke
            setup="Setup: Why don't pirates travel on mountain roads?"
            punchline="Punchline: Scurvy."
            isPun={true}
            />
            <Joke
            setup="Setup: Why do bees stay in the hive in the winter?"
            punchline="Punchline: Swarm."
            isPun={true}
            /> */}

            
        </div>
    )
}