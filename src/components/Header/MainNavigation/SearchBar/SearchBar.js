import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import classes from './SearchBar.module.css';


class SearchBar extends Component {

    state = {
        searchValue: ''
    }

    searchBarChangeHandler = (event) => {
        let value = event.target.value;
        this.setState({
            searchValue: value
        });
    }

    searchCloseHandler = () => {
        this.setState({
            searchValue: ''
        });
    }



    formSubmitHandler = (event) => {
        event.preventDefault();
        this.props.history.push(`/photos/unsplash?keyword=${this.state.searchValue}`);
    }

    render() {
        let crossIconClasses = classes["close-icon"];
        if(this.state.searchValue !== '') {
            crossIconClasses += " " + classes["close-icon--visible"];
        }
        return (
          <form className={classes["Searchbar"]} tabIndex="1" onSubmit={this.formSubmitHandler}>
            <span className={classes["search-icon"]}>
              <ion-icon name="search-outline"></ion-icon>
            </span>
            <input
              className={classes["searchbox"]}
              type="text"
              placeholder="Search free high-resolution photos"
              onChange={this.searchBarChangeHandler}
              value={this.state.searchValue || ''}
            />
            <span className={crossIconClasses} onClick={this.searchCloseHandler}>
              <ion-icon name="close-outline"></ion-icon>
            </span>
          </form>
        );
    }
};



export default withRouter(SearchBar);