import "./style.css"
import Data from "./Data"
import Card from "./components/Card"
import NavBar from "./components/NavBar"
export default function App () {
    const data = Data.map((item)=>{
        return (
            <Card
            key={item.id}
            {...item}

            />
        )
    })
    return (
        <div className="App">
            <NavBar/>
            <div className="container">
            {data}
            </div>
        </div>
    )
}