import React, { Component } from 'react';

import Logo from '../../assets/images/AK-logo.png';

class Header extends Component {
    render() {
      return(
          <header id="main-header">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12 main-header-wrap">
                          <div className="ak-branding">
                              <img src={Logo} alt="Logo"/>
                          </div>
                          <div className="ak-navigation">
                              <div>Menu</div>
                              <span></span>
                              <span></span>
                          </div>
                      </div>
                  </div>
              </div>
          </header>
      )
    }
  }
  export default Header;