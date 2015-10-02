import React from 'react/addons';
import {Grid, Row, Col } from 'react-bootstrap';
import TopNavbar from './_topnavbar';
import Sidebar from './_sidebar';
import OffSidebar from './_offsidebar';
import Footer from './_footer';
import Alert from './_alert';

class Layout extends React.Component {
  render () {
    return (
      <div className='main-layout'>
        <Grid className='outer-grid' fluid>
          <Row fill className="topnavbar-wrapper">
            <TopNavbar mdOffset={0} md={12} />
          </Row>
          <Row fill className="main-panel">
            <Col mdOffset={0} md={2}>
              <aside className="aside">
                <Sidebar/>
              </aside>
            </Col>
            <Col md={10}>
              <Grid>
                <Row>
                  <Col fill>
                    <section>
                      <div className="content-wrapper">
                          <Alert/>
                          {
                            this.props.pageComponent ? this.props.pageComponent : <div className='rx-main-panel'>Main Panel</div>
                          }
                      </div>
                    </section>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <Footer/>
                  </Col>
                </Row>
              </Grid>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Layout;
