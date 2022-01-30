import LocationIcon from "../map-marker.png";

function Cards(props){

    props = props.item;

    let checkAvaliblity

    if(props.openSpots ==0 ){
        checkAvaliblity = 'Not Avalilable'
    } else {
        checkAvaliblity = 'Avalilable'
    }

    

    return(
        <div className="tj_list__item">
                <div className="tj_list__item__img">
                    <span className="list_item_avaliblity">{checkAvaliblity}</span>
                    <img src={`images/${props.coverImg}`} />
                </div>
                <div className="tj_list__item__content">
                    <div className="tj_list__item__location">
                            <span className="location_icon"><img src={LocationIcon} /> {props.location}</span>
                            <a href="">View on Google maps</a>
                    </div>
                    <h2> {props.title} </h2>
                    <div className="tj_list__item__description">
                        <span>{props.date}</span>
                        <div className="tj_list__item__text">
                            {props.description} 
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Cards;