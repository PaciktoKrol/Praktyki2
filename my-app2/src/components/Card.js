export default function Card(props){
    let badgeTest
    if (props.item.openSpots === 0){
        badgeTest="SOLD OUT"
    } else if(props.item.location === " Online"){
        badgeTest= "ONLINE"
    }
    return (
        <div className="Card">
            {badgeTest && <div className="Card--badge">{badgeTest}</div>}
            <img src={props.item.coverImg} className="Card--image" />
            
            <div className='Card-stats'>
                <img src={require('/Users/michal/my-app2/src/photos/Star 1.png')} className="Card--star"/>
                <span>{props.item.stats.rating}</span>
                <span className='grey'>({props.item.stats.reviewCount})</span>
                <span className='grey'>{props.item.country}</span>
            </div>
            <p className="Card--title">{props.item.title}</p>
            <p><span className='bold'>{props.item.price}</span> /Person</p>
        </div>
    )
}