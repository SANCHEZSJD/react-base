import React from 'react'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import '../../assets/sass/Login.sass'

class Login extends React.Component {
    state = {
        model: {
        }
    }
    handleChange = name => event => {
        let { model } = this.state
        model[name] = event.target.value;
        this.setState(model);
    };

    render() {
        let { model } = this.state

        return (
            <div className="login-wrapper">
                <div className="login">
                    <form noValidate autoComplete="off">
                        <Grid container>
                            <Grid item xs={12}>
                                <TextField
                                    id="user"
                                    label="User"
                                    className="full-width"
                                    value={model.user}
                                    onChange={this.handleChange('user')}
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="password"
                                    label="Password"
                                    className="full-width"
                                    value={model.password}
                                    onChange={this.handleChange('password')}
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="raised" color="primary">
                                    Login
                                </Button>
                            </Grid>
                        </Grid>


                    </form>
                </div>
            </div>
        )
    }
}

export default Login