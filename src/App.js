import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


import './App.css';
import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import Unsplash from './containers/Unsplash/Unsplash';
import Pixabay from './containers/Pixabay/Pixabay';
import Profile from './containers/Profile/Profile';
import UnsplashSearch from './components/Unsplash/Search/Search';
import PixabaySearch from './components/Pixabay/Search/Search';
import Login from './containers/Authentication/Login/Login';
import Signup from './containers/Authentication/Signup/Signup';
import CV from './containers/ComputerVision/ComputerVision';
import * as actions from './store/actions/index';


class App extends Component {

  componentDidMount(){
      this.props.onAppStartupSessionCheck();
  }
  
  render(){
    return (
      <div className="App">
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Layout>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/unsplash" exact component={Unsplash} />
              <Route path="/photos/unsplash" exact component={UnsplashSearch} />
              <Route path="/photos/pixabay" exact component={PixabaySearch} />
              <Route path="/pixabay" exact component={Pixabay} />
              <Route path="/profile" exact component={Profile} />
              <Route path="/computerVision" exact component={CV} />
              <Route component={() => (<h1>Route Not found!!!</h1>)} />
            </Switch>
          </Layout>
        </Switch>
      </div>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}


const mapDispatchToProps = dispatch => {
  return {
    onAppStartupSessionCheck : () => dispatch(actions.asyncAppStartupSessionCheck())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
