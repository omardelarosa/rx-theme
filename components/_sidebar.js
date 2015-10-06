import React from 'react/addons';
import { Col } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class Sidebar extends React.Component {
  
  constructor (props) {
    super(props);
   
    this.onToggle = this.onToggle.bind(this);
    this.state = {};
  }

  onToggle (ev) {
    this.setState({ closed: !this.state.closed });
  }
  
  render () {
    return (
        <nav className={ "sidebar" + (this.state.closed ? " closed" : "" ) } data-sidebar-anyclick-close="">
          <ul className="nav">
            <li className="nav-heading">
              <span></span>
            </li>
            <li className="nav-link">
              <a href='#'>
                <em></em>
                <span>Link 1</span>
              </a>
            </li>
            <li className="nav-link">
              <a href='#'>
                <em></em>
                <span>Link 2</span>
              </a>
            </li>
            <li className="nav-link">
              <a href='#' onClick={this.onToggle}>
                <em></em>
                <span>Toggle</span>
              </a>
            </li>
          </ul>
        </nav>
);
  }
};

export default Sidebar;
