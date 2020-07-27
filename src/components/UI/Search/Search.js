import React , { Component } from 'react';


import classes from './Search.module.css';

class Search extends Component {

    render(){
        return (
            <div className={classes["Search"]}>
                <input type="text" />
            </div>
        )
    }
}


export default Search;