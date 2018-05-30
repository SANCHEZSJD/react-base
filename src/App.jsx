import React from 'react'
import indexRoutes from "./routes/index.jsx"
import { createBrowserHistory } from "history"
import { Router, Route, Switch } from "react-router-dom";

import './assets/sass/index.sass'

const history = createBrowserHistory()

class App extends React.Component {
    constructor(props) {
        super(props)
        if (!localStorage.getItem('user')) {
            history.push('/login')
        }
    }

    render() {
        return (
            <Router history={history}>
                <Switch>{indexRoutes.map((prop, key) => {
                    return <Route path={prop.path} component={prop.component} key={key} />
                })}
                </Switch>
            </Router>
        )
    }
}

export default App;