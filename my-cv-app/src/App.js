import Info from "./components/Info"
import Michal from "/Users/michal/my-cv-app/src/photos/Michal.jpg"
import "/Users/michal/my-cv-app/src/style.css"
import About from "./components/About"
import Interests from "./components/Interests"

export default function App (){
    return(
        <div className="container">
            <Info/>
            <About/>
            <Interests/>
        </div>
    )
}