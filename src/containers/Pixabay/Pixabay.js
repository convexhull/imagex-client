import React, {Component} from 'react';
import { connect } from 'react-redux';

import Navbar from '../../components/Pixabay/Navigation/Navbar';
import ImageGrid from '../../components/Pixabay/ImageGrid/ImageGrid';
import * as actions from '../../store/actions/index';



class Pixabay extends Component {

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
    images: state.pixabay.images,
    page: state.pixabay.page,
    isAuthenticated: state.auth.token !== null
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onSearchByKeyword : (keyword) => dispatch(actions.pixabayImageSearchByKeyword(keyword))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pixabay);
