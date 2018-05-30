import React from 'react'
import './../../assets/sass/sidebar.sass'
import { List, ListItem, ListItemText, Hidden, Drawer, withStyles } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'
import PropTypes from "prop-types"

const Sidebar = ({ ...props }) => {

    // verifies if routeName is the one active (in browser input)
    var activeRoute = (routeName) => props.location.pathname.indexOf(routeName) > -1 ? true : false;
    console.log(props);
    
    const { classes, color, routes } = props;
    var links = (
        <List>
            {
                routes.map((prop, key) => {
                    if (prop.redirect) {
                        return null
                    }
                    
                    const listItemClasses = classNames({
                        [" " + classes[color]]: activeRoute(prop.path)
                    })
                    const whiteFontClasses = classNames({
                        [" " + classes.whiteFont]: activeRoute(prop.path)
                    })
                    return (
                        <NavLink
                            to={prop.path}
                            className={classes.item}
                            activeClassName="active"
                            key={key}
                        >
                            <ListItem button className={classes.itemLink + listItemClasses}>
                                <ListItemText
                                    primary={prop.sidebarName}
                                    className={classes.itemText + whiteFontClasses}
                                    disableTypography={true}
                                />
                            </ListItem>
                        </NavLink>
                    )
                })
            }
        </List>
    )

    return (
        <div>
            <Hidden smDown>
                <Drawer
                    anchor="left"
                    variant="permanent"
                    open
                    classes={{
                        paper: classes.drawerPaper
                    }}
                >
                    <div className={classes.sidebarWrapper}>{links}</div>
                </Drawer>
            </Hidden>
        </div>
    )
}

Sidebar.propTypes = {
    classes: PropTypes.object.isRequired
};

export { Sidebar };