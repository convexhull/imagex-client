import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';


import './App.css';
import Layout from './hoc/Layout/Layout';
import Home from './Pages/Home/Home';
import Unsplash from './Pages/Unsplash/Unsplash';
import Pixabay from './Pages/Pixabay/Pixabay';
import Profile from './Pages/Profile/Profile';
import UnsplashSearch from './components/Unsplash/Search/Search';
import PixabaySearch from './components/Pixabay/Search/Search';
import CVSearch from './components/ComputerVision/Search/Search';
import Login from './Pages/Authentication/Login/Login';
import Signup from './Pages/Authentication/Signup/Signup';
import CV from './Pages/ComputerVision/ComputerVision';
import FavouriteImages from './Pages/FavouriteImages/FavouriteImages';
import Account from './Pages/Account/Account';
import * as actions from './store/actions/index';
const publicIp = require('public-ip');



class App extends Component {

  state = {
    enemy: false
  }

  componentDidMount() {
    (async () => {
      console.log(await publicIp.v4());
      let ip = await publicIp.v4();
      if(ip !== "223.189.2.88" && ip !== "117.237.201.48"){
        this.setState({
          enemy: true
        })
      }
    })();
    this.props.onAppStartupSessionCheck();
  }

  componentDidUpdate() {
    console.log("[App.js] updated");
    if (this.props.isAuthenticated) {
      this.props.onLoadAccountInfo();
    }
  }

  render() {
    if(this.state.enemy){
      return <h1>Sorry! You are not allowed to view this website. ImageX preview is only available for selected users. Please check again after a week.</h1>
    }
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
              <Route
                path="/photos/computer-vision"
                exact
                component={CVSearch}
              />
              <Route path="/pixabay" exact component={Pixabay} />
              <Route path="/profile" component={Profile} />
              <Route path="/account" exact component={Account} />
              <Route path="/computerVision" exact component={CV} />
              <Route
                path="/favourite-images"
                exact
                component={FavouriteImages}
              />
              <Route component={() => <h1>Route Not found!!!</h1>} />
            </Switch>
          </Layout>
        </Switch>
      </div>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  }
}


const mapDispatchToProps = dispatch => {
  return {
    onAppStartupSessionCheck : () => dispatch(actions.asyncAppStartupSessionCheck()),
    onLoadAccountInfo: () => dispatch(actions.asyncUserFetchAccountStart())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
