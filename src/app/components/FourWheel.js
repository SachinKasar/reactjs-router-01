import React from "react";
import { browserHistory } from "react-router";

export class FourWheel extends React.Component {
    gotoTwoWheelPage(){
       browserHistory.push("/twowheel");
    }
    
    render() {
         return ( 
            <div  className="alert alert-warning" >
                <h3>Four Wheeler Page !!! </h3>
                <p> Four Wheeler Name : { this.props.params.name }</p>
                <br/><button className="btn btn-primary"  onClick={this.gotoTwoWheelPage}>Go to Two Wheel</button>
            </div>
        );
    }
}
