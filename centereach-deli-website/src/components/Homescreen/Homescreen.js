import React, { useState }  from 'react';
import Header    from '../Header/Header.js'
import Body      from '../Body/Body.js'

const Homescreen = () => {
    
    const [display, setDisplay] = useState("breakfast")

    return(
        <div className='flex bg-slate-500 h-screen w-screen justify-center'>
            <Header setDisplay={setDisplay}/>
            <Body
                display={display}
            />
        </div>
    )
}

export default Homescreen