import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import {Tabs,Tab} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    tab:{
        
    },
    tabsContainer:{
        marginLeft:"auto"
    }
}));
function Navbar() {
    const classes=useStyles()
    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <Typography variant="h6" color="inherit">
                    Products
          </Typography>

                <Tabs className={classes.tabsContainer}>
                    <Tab component={Link} to="/" className={classes.tab} label="Home" />
                    <Tab component={Link} to="/product" className={classes.tab} label="Products" />
                    <Tab component={Link} to="/about" className={classes.tab} label="About" />
                </Tabs>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
