import React, { useState }  from 'react';
import Header    from '../Header/Header.js'
import Body      from '../Body/Body.js'
import Sidebar from '../Sidebar/Sidebar.js';

const Homescreen = () => {
    
    const [display, setDisplay] = useState("breakfast")
    const [initialLoad, setInit] = useState(true)

    return(
        <div id="Homescreen" className>
            <Sidebar pageWrapId={"page-wrap"} outerContainerId={"Homescreen"}></Sidebar>
            <div id="page-wrap" className='h-screen w-screen justify-center'>
                <div className='fixed columns-2 gap-0 w-screen z-0'>
                    <div className='h-screen bg-gradient-to-r from-transparent from-10% via-amber-100 via-25% to-amber-100'></div>
                    <div className='h-screen bg-gradient-to-l from-transparent from-10% via-amber-100 via-25% to-amber-100'></div>
                </div>
                <div className='absolute flex justify-center w-full h-full z-10'>
                    <Header setDisplay={setDisplay} initialLoad={initialLoad} setInit={setInit}/>
                    <Body
                    display={display}
                    />
                </div>
            </div>
        </div>
    )
}


export default Homescreen