import React, {Component} from 'react';
import { connect } from 'react-redux';

import Navbar from '../../components/Pixabay/Navigation/Navbar';
import ImageGrid from '../../components/UI/ImageGrid/ImageGrid';
import * as actions from '../../store/actions/index';





class Unsplash extends Component {

  render(){
    return (
      <React.Fragment>
        <Navbar onSearchByKeyword={this.props.onSearchByKeyword} isAuthenticated={this.props.isAuthenticated}/>
        <ImageGrid images={this.props.images}/>
      </React.Fragment>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    images: state.unsplash.images,
    page: state.unsplash.page,
    isAuthenticated: state.auth.token !== null
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onSearchByKeyword : (keyword) => dispatch(actions.unsplashImageSearchByKeyword(keyword))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Unsplash);
