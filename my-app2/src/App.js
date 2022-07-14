import "/Users/michal/my-app2/src/style.css"
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import Data from "./Data"
export default function App(){
    const cards = Data.map((item) =>{
        return(
            <Card
            key={items.id}
            item={item}
            
           />
        )
    })
    return(
        <div>
            <NavBar/>
            <Hero/>
            {/* <Card
            img={require('/Users/michal/my-app2/src/photos/Person.png')} 
            rating="5.0"
            reviewCount="6"
            country="Poland"
            title="Life lessons with Katie Zaferes"
            price="$136"
            /> */}
            <section className="Cards--list">
            {cards}
            </section>
        </div>
    )
}