import React from 'react/addons';
import { Col } from 'react-bootstrap';

class Sidebar extends React.Component {
  render () {
    return (
        <nav className="sidebar" data-sidebar-anyclick-close="">
          <ul className="nav">
            <li className="nav-heading">
              <span></span>
            </li>
            <li className="nav-link">
              <a href='#'>
                <em className="icon-magnifier"></em>
                <span>Link 1</span>
              </a>
            </li>
            <li className="nav-link">
              <a href='#'>
                <em className="icon-magnifier"></em>
                <span>Link 2</span>
              </a>
            </li>
          </ul>
        </nav>
);
  }
};

export default Sidebar;
