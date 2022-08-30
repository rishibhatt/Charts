import React from 'react'
import { GiAnchor } from "react-icons/gi";
import './css/Navbar.css';
function Navbar() {
    return (
        <>
            <div className='nav-container'>
                <div className='nav'>
                    <GiAnchor className='logo' />
                    <h1 className='logo-name'>Analyzer</h1>

                </div>
            </div>
        </>

    )
}

export default Navbar