import React, { useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Drawer,
    MenuList,
    MenuItem,
    ListItemText,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useStoreState } from 'easy-peasy';

const useStyles = makeStyles((theme) => 
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        drawer: {
            width: 300,
        },
        fullList: {
            width: 'auto',
        },
        header: {
            backgroundColor: "#1976D2"
        }
    })
); 

const NavBar = (props) => {
    // console.log(props);
    const Routes = useStoreState(state => state.routes.routes);
    const classes = useStyles();
    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = (open) => (
        event
    ) => {
        if (
            event.type === 'keydown' &&
                (event.key === 'Tab' ||
                event.key === 'Shift')
        ) {
            return;
        }
        setIsOpen(open);
    };

    const activeRoute = (routeName) => {
        return props.location.pathname === routeName ? true: false;
    }

    return (
        <div>
            <div className={classes.root}>
                <AppBar className={classes.header}>
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            CapooCare
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
            <Drawer classes={{paper:classes.drawer}} open={isOpen} onClose={toggleDrawer(false)}>
                <div
                    className={classes.fullList}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <MenuList>
                        {Routes.map((prop, key) => {
                            return (
                                <NavLink to={prop.path} style={{textDecoration: 'none'}} key={key}>
                                    <MenuItem selected={activeRoute(prop.path)}>
                                        <ListItemText primary={prop.sidebarName} />
                                    </MenuItem>
                                </NavLink>
                            );
                        })}
                    </MenuList>
                </div>
            </Drawer>
        </div>
    )
} 

export default withRouter(NavBar);