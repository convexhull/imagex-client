import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';


import './App.css';
import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import Unsplash from './containers/Unsplash/Unsplash';
import Authentication from './containers/Authentication/Authentication';
import Pixabay from './containers/Pixabay/Pixabay';
import Profile from './containers/Profile/Profile';
import UnsplashSearch from './components/Unsplash/Search/Search';
import PixabaySearch from './components/Pixabay/Search/Search';
import Login from './containers/Authentication/Login/Login';


class App extends Component {

  componentDidMount(){
    
  }
  
  render(){
    return (
      <div className="App">
        <Switch>
          <Route path="/login" exact component={Login} />
          <Layout>
            <Route path="/" exact component={Home} />
            <Route path="/authentication" exact component={Authentication} />
            <Route path="/unsplash" exact component={Unsplash} />
            <Route path="/photos/unsplash" exact component={UnsplashSearch} />
            <Route path="/photos/pixabay" exact component={PixabaySearch} />
            <Route path="/pixabay" exact component={Pixabay} />
            <Route path="/profile" exact component={Profile} />
            <Route component={() => (<h1>Route Not found!!!</h1>)} />
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
    onInitialLoginCheck : () => dispatch()
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
