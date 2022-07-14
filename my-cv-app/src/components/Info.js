import "/Users/michal/my-cv-app/src/photos/Michal.jpg"
import "/Users/michal/my-cv-app/src/style.css"

export default function Info (){
    return(
        <div className="info">
            <img src={require('/Users/michal/my-cv-app/src/photos/Michal.jpg')} />
            <h3>Michał Naron</h3>
            <p className="zawód">Zawód</p>
            <p font-size="2px" margin-top="0">dane napisane ciękim druczkiem</p>
            <div className="button-container">
                <button>email</button>
                <button className="linkedin" >Linkedin</button>
            </div>
        </div>
    )
}