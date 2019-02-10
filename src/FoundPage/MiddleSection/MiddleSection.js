import React, {Component} from 'react';
import './MiddleSection.css';

class MiddleSection extends Component{
  render(){
    return(
      <div className="MiddleSection">
              <img src={require('./img/person.jpg')} alt="person" id="person" />
              <p id="text"><span id="name">{this.props.name}</span> <br/>@handle</p>
      </div>
    );
  }
}

export default MiddleSection;
