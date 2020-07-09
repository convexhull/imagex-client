import React, {Component} from 'react';
import { connect } from 'react-redux';

import HeroSection from '../../components/Pixabay/HeroSection/HeroSection';



class Pixabay extends Component {

  componentDidMount() {

  }

  render(){
    return (
      <React.Fragment>
        <HeroSection platform="Pixabay" />
      </React.Fragment>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    page: state.pixabay.page,
    isAuthenticated: state.auth.token !== null
  }
}


const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pixabay);
