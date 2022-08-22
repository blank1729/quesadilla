import { FunctionComponent } from "react"
import './Item.css'


function Item(props: any) {
    return(
            <div className="item">
                <img src={props.item.img} alt={props.item.name} width="300px" height="200px"/>
                <div className="discription">
                    <div className="name-section">
                        <h3>{props.item.name}</h3>
                        <div className="add-button"><a href="#">Add</a></div>
                    </div>
                    <div className="price-section">
                        <span className="price">Rs {props.item.price}</span>
                        <span className="rating">{props.item.rating}</span>
                    </div>
                </div>
            </div>
    )
}

export default Item