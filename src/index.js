import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from "history"
import { Router, Route, Switch } from "react-router-dom";

import './assets/sass/index.sass'

import registerServiceWorker from './registerServiceWorker'

import indexRoutes from "./routes/index.jsx"
const history = createBrowserHistory()

ReactDOM.render(
    <Router history={history}>
        <Switch>{indexRoutes.map((prop, key) => {
            return <Route path={prop.path} component={prop.component} key={key} />
            })}
        </Switch>
    </Router>, document.getElementById('root'))
registerServiceWorker()