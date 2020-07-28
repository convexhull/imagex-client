import React , { Component } from 'react';


import classes from './Search.module.css';

class Search extends Component {

    render(){
        return (
            <div className={classes["Search"]}>
                <div className={classes["search-symbol"]}>
                    <ion-icon name="search-outline"></ion-icon>                    
                </div>
                <input type="text" placeholder="Search free high-resolution photos" />
                <div className={classes["cancel-btn"]}><ion-icon name="close-outline"></ion-icon></div>
            </div>
        )
    }
}


export default Search;