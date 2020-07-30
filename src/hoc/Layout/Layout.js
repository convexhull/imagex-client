import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';


import * as actions from '../../store/actions/index';
import MainNavbar from '../../components/Header/MainNavigation/MainNavigation';
import ImageModal from '../../components/Unsplash/ImageModal/ImageModal';


class Layout extends Component {


  toggleRandomImageModal = () => {
    this.props.onRandomImageLoad();
  }


  render(){

    return (
      <Fragment>
        {this.props.randomImage ? <ImageModal show={this.props.randomImage} hideImageModal={false} image={this.props.randomImage} /> : null }
        <header>
          <MainNavbar randomImageLoad={this.toggleRandomImageModal}/>
        </header>
        {this.props.children}
        <footer>
          <h2>Some footer</h2>
        </footer>
      </Fragment>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
    randomImage: state.unsplash.randomImage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRandomImageLoad: () => dispatch(actions.asyncUnsplashGetRandomImage())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Layout);
