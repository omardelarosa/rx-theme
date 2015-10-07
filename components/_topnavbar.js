import React from 'react/addons';
import { Col } from 'react-bootstrap';
import * as _ from 'lodash';

class TopNavbar extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps (props) {
  
  }

  render () {
    return (
          <Col role="navigation" className="navbar topnavbar">
             <div className="navbar-header">
                <a href="/" className="navbar-brand">
                   <div className="brand-logo">
                      <span className="rx-project-name">Project</span>
                  </div>
                </a>
             </div>
             <div className="nav-wrapper">
                <ul className="nav navbar-nav">
                  <li>
                    <a href="#" data-toggle-state="aside-collapsed" className="hidden-xs">
                      <em className="fa fa-navicon"></em>
                    </a>
                    <a href="#" data-toggle-state="aside-toggled" data-no-persist="true" className="visible-xs sidebar-toggle">
                      <em className="fa fa-navicon"></em>
                    </a>
                  </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        {
                          (() => {
                            if (this.props.dropdownItems && this.props.dropdownItems.length > 0) {
                              return (
                                <div className="btn-group segments-upload navbar-btn" data-toggle="tooltip" data-placement="left" title="Upload current company's segments">
                                  <button type="button" className="btn btn-default main" data-url="--= start_uploading_segments_path --" disabled>Select an item</button>
                                  <button type="button" data-toggle="dropdown" className="btn dropdown-toggle btn-default" aria-expanded="false">
                                  <span className="caret"></span>
                                  <span className="sr-only">default</span>
                                </button>
                                <ul role="menu" className="dropdown-menu">
                                  { this.props.dropdownItems.map((item, idx) => <li key={ idx }><a href="#">{item.name}</a></li> ) }
                                </ul>
                                </div>
                              );
                            } else {
                              return (
                                <div className="btn-group segments-upload navbar-btn" data-toggle="tooltip" data-placement="left" title="Upload current company's segments">
                                <button type="button" className="btn btn-default main" disabled>No dropdown items</button>
                                </div>
                              );
                            }
                          })()
                        }
                    </li>
                   <li>
                      <a>
                         <em></em>
                      </a>
                   </li>
                </ul>
             </div>
          </Col>  
    );
  }
}
TopNavbar.defaultProps = {
  dropdownItems: [ { name: 'one' }, { name: 'two' }, { name: 'three' }, { name: 'four'} ]
};

export default TopNavbar;
