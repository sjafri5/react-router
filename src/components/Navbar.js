import React from "react";
import { BrowserRouter as Router, Link} from 'react-router-dom';

const Navbar = props => (
  <div className={`ui inverted ${props.color} menu`}>
    <a className="item">
      <h2 className="ui header">
        <i className={`${props.icon} icon`} />
        <div className="content">{props.title}</div>
        <div className="sub header">{props.description}</div>
      </h2>
    </a>
    <div className='right menu'>
      <Link to={'/about'} className='item'>
        About
      </Link>
    </div>
    
  </div>
);

export default Navbar;
