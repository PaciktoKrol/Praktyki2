export default function NavBar(){
    return(
        <nav className="NavBar">
        <h2 className="NavBar--title">Meme Generator</h2>
        <img className='NavBar--img' src={require('/Users/michal/Projects/mem-app/src/photos/Vector.png')}/>
        <p className="NavBar--p">React Course - Project 3</p>
        
        </nav>
    )
}