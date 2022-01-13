import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Users from "./pages/Users";


const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={"/page/:page"} component={Users}/>
                <Route path={"/"} component={Users}/>

            </Switch>
        </BrowserRouter>

    );
};
export default App;