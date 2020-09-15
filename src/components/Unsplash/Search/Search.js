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
  }

  componentDidMount() {
    this.props.onSetActivePlatform();
    this.props.onClearPreviousImages();
    let search = new URLSearchParams(this.props.location.search);
    let keyword = search.get("keyword");
    this.setState({
        keyword
    })
  }

  componentDidUpdate(prevProps, prevState){
    let search = new URLSearchParams(this.props.location.search);
    let keyword = search.get("keyword");
    if(keyword !== this.state.keyword){
      this.setState({
        keyword: keyword
      })
    }
  }

  render() {
    return (
      <React.Fragment>
        <CategoryNavigation
          platform="unsplash"
        />
        <div className={classes["search-keyword"]}>
          <h1 className={classes["search-keyword__title"]}>
            {capitalizeFirstLetter(this.state.keyword)}
          </h1>
        </div>
        <ScrollLazyLoader keyword={this.state.keyword} />
      </React.Fragment>
    );
  }
}





const mapDispatchToProps = (dispatch) => {
    return {
        onClearPreviousImages: () => dispatch(actions.unsplashClearAllImages()),
        onSetActivePlatform: () => dispatch(actions.setActivePlatform("unsplash"))
    }
}


export default connect(null, mapDispatchToProps)(Search);
