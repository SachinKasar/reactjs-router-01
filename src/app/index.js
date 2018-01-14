import React from "react";
import {render} from "react-dom";
import { Router, Route, browserHistory, IndexRoute } from "react-router";

import { Root } from "./components/Root";
import { TwoWheel } from "./components/TwoWheel";
import { FourWheel } from "./components/FourWheel";

class App extends React.Component {
    render() {
	 return ( 
		<Router history={browserHistory}> 
            <Route path={"/"} component={Root}>
                <IndexRoute  component={TwoWheel} />
                <Route path={"twowheel"} component={TwoWheel} />       
                <Route path={"fourwheel/:name"} component={FourWheel} />
            </Route>
              
            <Route path={"2wheel"} component={TwoWheel} />       
        
         </Router>
        );
    }
}

render( < App / > , document.getElementById("app"));