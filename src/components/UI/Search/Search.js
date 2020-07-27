import React , { Component } from 'react';


import classes from './Search.module.css';

class Search extends Component {

    render(){
        return (
            <div className={classes["Search"]}>
                <div>
                    Mag
                </div>
                <input type="search" />
                <button type="button">X</button>
            </div>
        )
    }
    
}


export default Search;