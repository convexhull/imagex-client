import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';


import * as actions from '../../store/actions/index';
import MainNavbar from '../../components/Header/MainNavigation/MainNavigation';
import RandomImageModal from '../../components/Unsplash/ImageModal/ImageModal';


class Layout extends Component {

  state = {
    showRandomImageModal: false
  }


  toggleRandomImageModal = () => {
    this.setState((prevState, props) => {
      return {
        showRandomImageModal: !prevState.showRandomImageModal
      }
    })
  }


  render(){
    return (
      <Fragment>
        {this.state.showRandomImageModal ? <RandomImageModal show={this.state.showRandomImageModal}  /> : null }
        <header>
          <MainNavbar clicked={this.toggleRandomImageModal}/>
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
    isAuthenticated: state.auth.token !== null 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRandomImageLoad: () => dispatch(actions.asyncUnsplashGetRandomHeroImage())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Layout);
