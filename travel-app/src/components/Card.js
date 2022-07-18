export default function Card(props){
    return (
        <div className="Card">
            <img className="img" src={props.imageUrl}></img>
            <div>
            <p className="location">{props.location}</p>
            <a href={props.googleMapsUrl}>View on Google Maps</a>
            <h2>{props.title}</h2>
            <p className="data">{props.startDate}-{props.endDate}</p>
            <div className="section">
            <p>{props.description}</p>
            </div>
            <hr/>
            </div>
        </div>
    )
}