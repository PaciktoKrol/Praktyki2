export default function Joke(props){
    console.log(props)
    return (
        <div>
            
            <h1 style={{display: props.setup ? "block" : "none"}}>{props.setup}</h1>
            <h1>{props.punchline}</h1>
            <hr/>
        </div>
    )

}
