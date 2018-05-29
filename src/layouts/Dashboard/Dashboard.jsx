import React from 'react'
import { Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button'

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
                <Button
                    type="button"
                    variant="raised"
                    color="primary"
                    onClick={this.handleLogout}
                >Logout</Button>
            </div>
        )

    }
}

export default Dashboard