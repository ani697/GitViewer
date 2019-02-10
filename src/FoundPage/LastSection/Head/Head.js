import React,{Component} from 'react';
import './Head.css';
import TabPortion from './TabPortion/TabPortion';
import {Link} from 'react-router-dom';


class Head extends Component{
  render(){
    return(
      <div className="Head">
          <p id="HeadText">Bio</p>
          <p id="Text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          <p id="WorkText">Work at</p>
          <p id="Work">Al contrario di</p>
          <span id="HeadText">Repositories</span>
          <span id="Followers">Followers</span>
          <br/>
          <span id="Work">52</span>
          <span id="Foll">259</span>
          <p id="HeadText">Pinned Repositories</p>
          <p id="Block">
          <Link to='#' id="link"><TabPortion /></Link>
          <Link to='#' id="link"><TabPortion /></Link>
          <Link to='#' id="link"><TabPortion /></Link>
          </p>
      </div>
    );
  }
}

export default Head;
