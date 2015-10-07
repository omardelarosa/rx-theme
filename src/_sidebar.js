import React from 'react/addons';
import { Col } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import * as _ from 'lodash';

class Sidebar extends React.Component {
  
  constructor (props) {
    super(props);
   
    Object.keys(this.eventHandlers).map((e) => {
      var fn = this.eventHandlers[e];
      return this.eventHandlers[e] = fn.bind(this);
    });
    
    this.state = {};
  }

  componentWillReceiveProps (props) {
    // Do stuff with props

  }

  render () {
    
    var buildLineItem = (item, idx) => {
      return  (
        <li className="nav-link" key={ idx }>
          <a href={ item.href || undefined } onClick={ this.eventHandlers[item.handlerName] || undefined }>
            <em className={ item.iconClass || "" }></em>
            <span>{ item.name || "" }</span>
          </a>
          {
            !_.isEmpty(item.children) ? 
              <ul className="nav sidebar-subnav">
                { item.children.map(buildLineItem) }
              </ul> : null
          }
        </li>
      )
    }
    
    return (
        <div className="aside-inner">
          <nav className={ "sidebar" + (this.state.closed ? " closed" : "" ) } data-sidebar-anyclick-close="">
            <ul className="nav">
              <li className="nav-heading">
                <span></span>
              </li>
              { (() => this.props.items.map(buildLineItem))() }
            </ul>
          </nav>
        </div>
    );
  }
};

// Define event handlers usable by component
Sidebar.prototype.eventHandlers = {
  toggle: function (ev) {
    this.setState({ closed: !this.state.closed });
  }
}

Sidebar.defaultProps = {
  items: [
    {
      name: 'Toggle',
      icon: 'fa chevron',
      href: '#',
      handlerName: 'toggle'
    }
  ]
};

export default Sidebar;
