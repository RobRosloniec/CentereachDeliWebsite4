const Header = (props) => {
    const getContent = (event) =>{
        console.log("huh?")
        props.setDisplay(event.target.id)
        props.setInit(false)
        
    }
    console.log(props.initialLoad)
    return(
        <div className="text-center pt-4 w-3/4">
            <div className="text-4xl uppercase underline">
                Centereach Deli
            </div>
            <div className="text-xl">
                1769 Middle Country Rd.
            </div>
            <div className="text-xl">
                Centereach, N.Y. 11720
            </div>
            <div className="text-l">
                (631) 585-1889
            </div>

            {props.initialLoad ? <div className="grid grid-cols-2 gap-2 justify-items-center pt-4">
                <button id="breakfast" onClick={getContent} class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-lg w-full shadow-lg">
                    Breakfast
                </button>
                <button id="lunch" onClick={getContent} class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-lg w-full shadow-lg">
                    Lunch
                </button>
                <button id="catering" onClick={getContent} class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-lg w-full shadow-lg">
                    Catering
                </button>
                <button id="order" onClick={getContent} class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-lg w-full shadow-lg">
                    Order
                </button>
            </div> : <></>}
            
        </div>
    )
}

export default Header