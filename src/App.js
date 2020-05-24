import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';


import './App.css';
import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import Unsplash from './containers/Unsplash/Unsplash';
import Authentication from './containers/Authentication/Authentication';
import Pixabay from './containers/Pixabay/Pixabay';


class App extends Component {



  componentDidMount(){

  }
  
  render(){
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/authentication" exact component={Authentication} />
            <Route path="/unsplash" exact component={Unsplash} />
            <Route path="/pixabay" exact component={Pixabay} />
            <Route component={()=>(<h1>Not found!!!</h1>)} />
          </Switch>
        </Layout>
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
