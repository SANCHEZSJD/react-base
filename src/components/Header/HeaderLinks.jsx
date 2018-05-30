import React from 'react'
import classNames from 'classnames'
import { Manager, Target, Popper } from 'react-popper'
import {
    withStyles,
    IconButton,
    MenuItem,
    MenuList,
    Grow,
    Paper,
    ClickAwayListener,
    Hidden
} from '@material-ui/core'
import {
    Person,
    Notifications,
    Dashboard,
    Search
} from '@material-ui/icons'
import { CustomInput, IconButton as SearchButton } from './../../components'