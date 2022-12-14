import React, { Component } from 'react';
import Nav from './Nav';
import classes from './Header.module.css'
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (

            
            <div className={classes.header}>
                <Link to="/">
                 <h1>Taste IT</h1>
                </Link>
            <Nav/>
           
            </div>
        );
    }
}

export default Header;