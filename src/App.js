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
import PageNotFound from './Pages/NotFound/NotFound';
import * as actions from './store/actions/index';


class App extends Component {

  componentDidMount(){
      this.props.onAppStartupSessionCheck();
  }

  componentDidUpdate() {
    console.log("[App.js] updated");
    if(this.props.isAuthenticated){
      this.props.onLoadAccountInfo();
    }
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
              <Route path="/photos/computer-vision" exact component={CVSearch} />
              <Route path="/pixabay" exact component={Pixabay} />
              <Route path="/profile" component={Profile} />
              <Route path="/account" exact component={Account} />
              <Route path="/computerVision" exact component={CV} />
              <Route path="/favourite-images" exact component={FavouriteImages} />
              <Route component={PageNotFound} />
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
