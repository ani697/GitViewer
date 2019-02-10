import React from 'react';
import './Header.css';

const Header = () => {
    return (
      <div className="Header">
            <ul className="flexcontainer">
                <li className="flex-item" ><img src={require("./img/cat.png")} id="Logo" alt="LogoImg" /></li>
                <li className="flex-item">GitHub Profile Viewer</li>
            </ul>
      </div>
    );
}

export default Header;
