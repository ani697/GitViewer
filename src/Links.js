import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Viewer from './Viewer/Viewer';
import FoundPage from './FoundPage/FoundPage';
import './Links.css';

class Links extends Component{
  render(){
    return(
      <div className="Links">
          <Route path='/' exact component={Viewer} />
          <Route path='/FoundPage/:Title' component={FoundPage} />
      </div>
    );
  }
}

export default Links;
