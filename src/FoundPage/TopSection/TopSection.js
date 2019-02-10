import React,{Component} from 'react';
import './TopSection.css';
import {Link} from 'react-router-dom';

class TopSection extends Component{
  Clicked = () =>{
    console.log("It's Clicked!");
  }
  render(){
    return(
      <div className="TopSection">
            <Link to={'/'} className="link" ><img src={require('./img/return.png')} alt="return" id="Return" /></Link>
            <Link to={'/'} className="link">Back</Link>

      </div>
    );
  }
}

export default TopSection;
