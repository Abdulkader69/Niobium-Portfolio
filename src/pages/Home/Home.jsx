import React, { Component } from 'react';

import WDID from './../../components/02-WDID/index';
import Work from './../../components/03-Work/index';

class Home extends Component {
    render() {
      return(
          <section id="ak-home-rendared">
            <WDID />
            <Work />
          </section>
      )
    }
  }
  export default Home;