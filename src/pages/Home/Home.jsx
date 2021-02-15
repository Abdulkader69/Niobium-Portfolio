import React, { Component } from 'react';
import { getPosts } from '../../services/data-fetch';

import WDID from './../../components/02-WDID/index';
import Work from './../../components/03-Work/index';
import GIT from './../../components/08-GIT/index';

class Home extends Component {
  state = {
    posts: [],
  }
  async componentDidMount() {
    const posts = await getPosts();
    this.setState([ posts ]);
  }
  
    render() {
      return(
          <section id="ak-home-rendared">
            <WDID />
            <Work />
            <GIT />
            <ul>
              { this.state.posts.map( post => {
                return (
                  console.log(post)
                )
              } ) }
            </ul>
          </section>
      )
    }
  }
  export default Home;