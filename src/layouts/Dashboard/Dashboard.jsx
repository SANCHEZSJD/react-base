import React from 'react'
import Button from '@material-ui/core/Button'

import appRoutes from './../../routes/app'
import { Redirect, Route, Link } from "react-router-dom";

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: JSON.parse(localStorage.getItem('user'))
        }
        this.handleLogout = this.handleLogout.bind(this);
    }
    handleLogout = () => {
        localStorage.removeItem('user');
        this.forceUpdate()
    }
    render() {
        if (!localStorage.getItem('user')) {
            return (<Redirect to='/login' />)
        }
        return (
            <div>
                <h1>Dashboard</h1>
                <h2>Hi {this.state.user.user}</h2>
                <Button type="button" variant="raised" color="primary" onClick={this.handleLogout} >Logout</Button>
                <div>
                    <ul>
                        <li><Link to="/app/view-example">View example</Link></li>
                    </ul>
                </div>
                {
                    appRoutes.map((prop, key) => {
                        return <Route path={prop.path} component={prop.component} key={key} />
                    })
                }
            </div>
        )

    }
}

export default Dashboard