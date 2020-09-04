import React , { Component } from 'react';
import { connect } from 'react-redux';


import * as actions from '../../../store/actions/index'
import ScrollLazyLoader from '../../UI/ScrollLazyLoading/ScrollLazyLoading';
import CategoryNavigation from '../../Header/CategoryNavigation/CategoryNavigation';




class Search extends Component {
  state = {
    keyword: "",
  };

  componentDidMount() {
    this.props.onClearPreviousImages();
    let search = new URLSearchParams(this.props.location.search);
    let keyword = search.get("keyword");
    this.setState({
        keyword
    })
  }

  keywordChangeHandler = (newKeyword) => {
    console.log("xxxx");
    this.setState({
      keyword: newKeyword,
    })
  };

  render() {
    
    return (
      <React.Fragment>
        <CategoryNavigation
          platform="unsplash"
          clicked={this.keywordChangeHandler}
        />
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
