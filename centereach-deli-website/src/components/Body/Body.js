import breakfast from '../../data/breakfast.json'
import lunch     from '../../data/lunch.json'
import Item from '../Item/Item.js'

const Body = (props) =>{
    console.log(breakfast)
    console.log(props.display)
    if(props.display === "breakfast"){
        return(
        <div>
            {breakfast.items.map((item) => {
                return <Item item={item}></Item>
            })}
        </div>
        )
    }
    
    return(
    <div>

    </div>
    )
}

export default Body