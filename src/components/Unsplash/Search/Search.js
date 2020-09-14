import React , { Component } from 'react';
import { connect } from 'react-redux';


import * as actions from '../../../store/actions/index'
import ScrollLazyLoader from '../ScrollLazyLoading/ScrollLazyLoading';
import CategoryNavigation from '../../Header/CategoryNavigation/CategoryNavigation';
import classes from './Search.module.css';
import { capitalizeFirstLetter } from "../../../utils/generalUtils";




class Search extends Component {
  
  state = {
    keyword: ""
  };

  componentDidMount() {
    this.props.onClearPreviousImages();
    let search = new URLSearchParams(this.props.location.search);
    let keyword = search.get("keyword");
    this.setState({
        keyword
    })
  }


  inputHandler = (newKeyword) => {
    this.setState({
      keyword: newKeyword
    })
  }

  render() {
    
    return (
      <React.Fragment>
        <CategoryNavigation
          platform="unsplash"
          clicked={this.inputHandler}
        />
        <div className={classes["search-keyword"]}>
          <h1>
            {capitalizeFirstLetter(this.state.keyword)}
          </h1>
        </div>
        <ScrollLazyLoader keyword={this.state.keyword} />
      </React.Fragment>
    );
  }
}



const mapStateToProps = (state) => {
    return {
        images: state.unsplash.images,
        loading: state.unsplash.loading
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        onClearPreviousImages: () => dispatch(actions.unsplashClearAllImages())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Search);
