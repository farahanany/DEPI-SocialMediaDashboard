import React from 'react';
import logoImage from '../assets/yappers.png'; // Importing the logo image
import { SidebarData } from './SidebarData';  // Importing SidebarData

import '../styles/Sidebar.css';  

function Sidebar() {
    return (
        <div className="Sidebar"> 
         
        
            <div className="sidebar-logo">
                <img
                    src={logoImage}
                    alt="Logo"
                    className="sidebar-logo-img"
                />
            </div>
            <ul className="sidebarlist"> 
                {SidebarData.map((val, key) => {
                    return (
                        <li key={key} className="row" 
                        id={window.location.pathname === val.link ? "active" : ""}
                        onClick={() => { window.location.pathname = val.link }}>
                            <div id="icon">{val.icon}</div>{""}
                            <div  id="title">{val.title}</div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Sidebar;
