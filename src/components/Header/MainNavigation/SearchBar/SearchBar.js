import React, { Component } from 'react'

import classes from './SearchBar.module.css';


class SearchBar extends Component {

    render() {
        return (
            <input className={classes["Searchbar"]} type="text" placeholder="Search free high-resolution photos"/>
        );
    }
};



export default SearchBar;