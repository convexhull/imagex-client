import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import Unsplash from './containers/Unsplash/Unsplash';
import Authentication from './containers/Authentication/Authentication';



class App extends Component {
  
  render(){
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/authentication" exact component={Authentication} />
            <Route path="/unsplash" exact component={Unsplash} />
          </Switch>
        </Layout>
      </div>
    );
  }
}



export default App;
