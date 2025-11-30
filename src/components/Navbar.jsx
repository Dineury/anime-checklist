import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
const navigate = useNavigate()

    return (
        <div id="nav-wrapper" className="bg-amber-50 m-1 justify-self-end p-1 pl-5  " >
            <button id="home-button" className="mr-5" onClick={() => navigate('/')}>Home</button>
           <button id="list-button" className="mr-5" onClick={() => navigate('/list')}>List</button>
        </div>
    )
}

export default Navbar