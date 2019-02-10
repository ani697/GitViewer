import React , {Component} from 'react';
import './User.css';
import UserSection from './UserSection/UserSection';
import {Link} from 'react-router-dom';


class User extends Component{
  state = {
    User:[
      {name: "Aniket",
      Description: "@handle, work at description bio to be wrap and not than 3 lines"},
      {name: "Tom",
      Description: "@handle, work at description bio to be wrap and not than 3 lines"},
      {name: "Utkarsh",
      Description: "@handle, work at description bio to be wrap and not than 3 lines"},
      {name: "Sham",
      Description: "@handle, work at description bio to be wrap and not than 3 lines"},
      {name: "Ankita",
      Description: "@handle, work at description bio to be wrap and not than 3 lines"},
      {name: "Ira",
      Description: "@handle, work at description bio to be wrap and not than 3 lines"}
    ]
  }
  render(){
    var Holder = this.state.User.map( (user,index) =>{
        return( <Link to={'/FoundPage/'+user.name}><p id="Box"><UserSection name={user.name} description={user.Description}/></p></Link>)
    });
    return(
      <div className="User">
        <p id="OuterBlock">
          {Holder}
        </p>
      </div>
    );
  }
}

export default User;
