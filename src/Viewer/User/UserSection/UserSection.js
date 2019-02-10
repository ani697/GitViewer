import React, {Component} from 'react';
import './UserSection.css';

class UserSection extends Component{
  render(){
    return(
      <span className="UserSection">
            <span id="name">{this.props.name}</span>
            <br/>
            <span id="description">{this.props.description}</span>
      </span>
    );
  }
}

export default UserSection;
