import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';


import * as actions from '../../store/actions/index';
import MainNavbar from '../../components/Header/MainNavigation/MainNavigation';
import ImageModal from '../../components/RandomImage/ImageModal/ImageModal';


class Layout extends Component {

  state = {
    showRandomImageModal: false
  }

  toggleRandomImageModal = () => {
    if(!this.state.showRandomImageModal){
      this.props.onRandomImageLoad();
    } else {
      this.props.onClearRandomImage();
    }
    this.setState((state, props) => {
      return {
        showRandomImageModal: !state.showRandomImageModal
      }
    });
  }

  render(){
    return (
      <Fragment>
        {this.state.showRandomImageModal ? <ImageModal hideImageModal={this.toggleRandomImageModal} image={this.props.randomImage} /> : null }
        <header>
          <MainNavbar randomImageLoad={this.toggleRandomImageModal}/>
        </header>
        {this.props.children}
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
    onRandomImageLoad: () => dispatch(actions.asyncUnsplashGetRandomImage()),
    onClearRandomImage: () => dispatch(actions.unsplashClearRandomImage())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
