import React from "react";

export class TwoWheel extends React.Component {
    render() {
         return ( 
            <div  className="alert alert-warning" >
               <h3> Two Wheeler !!! </h3>
               <ul>
                    <li>
                        <b>Name :</b> Enfield Classic
                    </li>
                    <li>
                        <b>By :</b> Royal Enfield
                    </li>
               </ul>
            </div>
        );
    }
}
