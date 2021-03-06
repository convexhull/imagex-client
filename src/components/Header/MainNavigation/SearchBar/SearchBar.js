import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

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
        this.props.history.push(`/photos/${this.props.platform}?keyword=${this.state.searchValue}`);
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
              <i className="fas fa-times"></i>
            </span>
          </form>
        );
    }
};


const mapStateToProps = (state) => {
  return {
    platform: state.imagex.activePlatform
  }
}



export default connect(mapStateToProps)(withRouter(SearchBar));