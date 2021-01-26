import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './assets/style.css';

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";


class App extends Component {
  state = {
    isDark: false,
  };

  handleModeChange = () => {
    //this.state.isDark = false 
    //!this.state.isDark = true 

    this.setState({ isDark: !this.state.isDark });
  };

  render() {
    return(
      <div id="page-container" className={this.state.isDark ? 'dark' : ''}>
        <Router>
          <Header 
            // onModeChange={this.handleModeChange} darkMode={this.state.isDark} 
          />
          <div id="main-content">
            <Switch>
              <Route exact path="/" component={Home} />
              {/* <Route exact path="/workroom" component={Workroom} /> */}
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}
export default App;