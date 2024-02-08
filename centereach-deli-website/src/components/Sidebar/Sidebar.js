import {slide as Menu} from 'react-burger-menu'

const Sidebar = (props) => {
    return(
        <Menu {...props}>
            <button id="Breakfast" className="menu-item">Breakfast</button>
            <button id="Lunch" className="menu-item">Lunch</button>
            <button id="Catering" className="menu-item">Catering</button>
            <button id="Order" className="menu-item">Order</button>
        </Menu>
    )
}

export default Sidebar