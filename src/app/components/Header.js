import React from "react";
import { Link } from "react-router";


export const Header = (props) =>   {
    return ( 
        <nav className="navbar navbar-default">
           <div className="container">
               <div className="navbar-header">
                     <ul className="nav navbar-nav">
                        <li><Link to={"/twowheel"} activeStyle={{color:"blue"}}>Two Wheel</Link></li>
                        <li><Link to={"/fourwheel" + "/Verna"}  activeStyle={{color:"blue"}}>Four Wheel</Link></li>
                     </ul>
                </div>
           </div>
        </nav>
    );
    
};
