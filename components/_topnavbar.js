import React from 'react/addons';

class TopNavbar extends React.Component {
  
  constructor(props) {
    super(props);
    this.props.dropdownItems = [ { name: 'one' }, { name: 'two' }, { name: 'three' } ];
    this.state = {};
  }

  render () {
    return (
          <nav role="navigation" className="navbar topnavbar">
             <div className="navbar-header">
                <a href="/" className="navbar-brand">
                   <div className="brand-logo">
                      <img alt='Project Logo' width='30px'className="img-responsive" src='https://upload.wikimedia.org/wikipedia/en/8/84/The_Future_Project_Logo.png'/>
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
                                  { this.props.dropdownItems.map((item) => <li><a href="#">{item.name}</a></li> ) }
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
          </nav>  
    );
  }
};

export default TopNavbar;
