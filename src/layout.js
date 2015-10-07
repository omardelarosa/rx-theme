import React from 'react/addons';
import { Grid, Row, Col } from 'react-bootstrap';
import TopNavbar from './_topnavbar';
import Sidebar from './_sidebar';
import Footer from './_footer';
import Alert from './_alert';

const nullPageComponent = <div className='rx-main-panel'>&nbsp;</div>; 

// Example dropdown and menu items
const sidebarItems = [
  {
    href: "#",
    name: "Item 1",
    handlerName: "toggle"
  },
  {
    href: "#",
    name: "Item 2",
    handlerName: "toggle"
  },
  {
    href: "#",
    name: "Item 3",
    handlerName: "toggle",
    children: [
      { 
        name: "Item 3a",
        href: "#",
        handlerName: "toggle"
      } 
    ]
  }
];

const dropdownItems = [
  { 
    name: 'one', 
    href: '#' 
  },
  { 
    name: 'two', 
    href: '#' 
  }, 
  { 
    name: 'three', 
    href: '#' 
  }
];

class Layout extends React.Component {
  constructor (props) {
    super(props);

    this.state = {};
  }

  componentWillReceiveProps() {
  
  }

  render () {
    var projectLogo = this.props.projectLogoComponent || (<span className='rx-project-name'>{this.props.projectName}</span>);
    return (
      <div className='main-layout'>
        <Grid className='outer-grid' fluid>
          <Row fill className="topnavbar-wrapper">
            <TopNavbar mdOffset={0} md={12} projectLogo={ projectLogo } dropdownItems={ this.props.dropdownItems }/>
          </Row>
          <Row fill className="main-panel">
            <Col mdOffset={0} md={12}>
              <aside className="aside">
                <Sidebar items={this.props.sidebarItems}/>
              </aside>
              <section className="content-wrapper">
                <Alert/>
                  { this.props.pageComponent }
                <Footer/>
              </section>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

Layout.defaultProps = {
  pageComponent: nullPageComponent,
  sidebarItems: sidebarItems,
  dropdownItems: dropdownItems
};

export default Layout;
