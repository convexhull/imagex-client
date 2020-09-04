import React , { Component } from 'react';


import classes from './Search.module.css';

class Search extends Component {

    render(){
        return (
            <div className={classes["Search"]}>
                <div className={classes["search-symbol"]}>
                    <ion-icon name="search-outline"></ion-icon>                    
                </div>
                <input 
                    type="text"
                    placeholder="Search free high-resolution photos"
                    value={this.props.value}
                    onChange={this.props.changed}
                />
                {this.props.value ? <div onClick={this.props.clearSearch} className={classes["cancel-btn"]}><i class="fas fa-times"></i></div> : null }
            </div>
        )
    }
}


export default Search;