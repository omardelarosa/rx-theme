import React from 'react/addons';
import { Grid, Row, Col } from 'react-bootstrap';
import TopNavbar from './_topnavbar';
import Sidebar from './_sidebar';
import Footer from './_footer';
import Alert from './_alert';

const nullPageComponent = <div className='rx-main-panel'>&nbsp;</div>; 

class Layout extends React.Component {
  constructor (props) {
    super(props);

    this.state = {};
  }

  componentWillReceiveProps() {
  
  }

  render () {
    return (
      <div className='main-layout'>
        <Grid className='outer-grid' fluid>
          <Row fill className="topnavbar-wrapper">
            <TopNavbar mdOffset={0} md={12} />
          </Row>
          <Row fill className="main-panel">
            <Col mdOffset={0} md={12}>
              <aside className="aside">
                <Sidebar/>
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
  pageComponent: nullPageComponent
};

export default Layout;
