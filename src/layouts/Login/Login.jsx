import React from 'react'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import green from '@material-ui/core/colors/green'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Redirect } from 'react-router-dom'

import '../../assets/sass/Login.sass'

const styles = theme => ({
    wrapper: {
        position: 'relative',
    },
    buttonSuccess: {
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[700],
        },
    },
    buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
})

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            model: {
                user: '',
                password: ''
            },
            loading: false,
            success: false
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        const { model } = this.state;
        model[name] = value;
        this.setState(model);
    }

    componentWillUnmount() {
        clearTimeout(this.timer)
    }

    handleFormSumit = e => {
        e.preventDefault();
        if (!this.state.loading) {
            this.setState(
                {
                    success: false,
                    loading: true,
                },
                () => {
                    this.timer = setTimeout(() => {
                        this.setState({
                            loading: false,
                            success: true,
                        });
                        localStorage.setItem('user', JSON.stringify(this.state.model));
                        this.forceUpdate()
                    }, 2000)
                }
            )
        }
    }

    timer = undefined

    handleChange = name => event => {
        let { model } = this.state
        model[name] = event.target.value
        this.setState(model)
    }

    render() {
        const { loading, success, model } = this.state
        const { classes } = this.props
        const buttonClassname = classNames({
            [classes.buttonSuccess]: success,
            'full-width': true
        })

        if (localStorage.getItem('user')) {
            return <Redirect to='/app' />
        } else {
            return (
                <div className="login-wrapper">
                    <div className="login">
                        <form noValidate autoComplete="off" onSubmit={this.handleFormSumit}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <TextField
                                        id="user"
                                        name='user'
                                        label="User"
                                        className="full-width"
                                        value={model.user}
                                        onChange={this.handleInputChange}
                                        margin="normal"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="password"
                                        name="password"
                                        label="Password"
                                        type="password"
                                        className="full-width"
                                        value={model.password}
                                        onChange={this.handleInputChange}
                                        margin="normal"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <div className="mt">
                                        <div className={classes.wrapper}>
                                            <Button
                                                type="submit"
                                                variant="raised"
                                                color="primary"
                                                className={buttonClassname}
                                                disabled={loading}
                                            >{loading ? 'Process' : 'Login'}</Button>
                                            {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </div>
            )
        }
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Login)