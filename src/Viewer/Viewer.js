import React,{Component} from 'react';
import Header from './Header/Header';
import SearchBar from './SearchBar/SearchBar';
import User from './User/User';
import './Viewer.css';


class Viewer extends Component{
  render(){
    return(
      <div className="Viewer">
            <Header />
            <SearchBar />
            <User />
      </div>
    );
  }
}

export default Viewer;
