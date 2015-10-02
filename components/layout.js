import React from 'react/addons';
import TopNavbar from './_topnavbar';
import Sidebar from './_sidebar';
import OffSidebar from './_offsidebar';
import Footer from './_footer';
import Alert from './_alert';

class Layout extends React.Component {
  render () {
    return (
        <span className='main-layout'>
          <div className="wrapper">
            <header className="topnavbar-wrapper">
              <TopNavbar/>
            </header>
            <aside className="aside">
              <Sidebar/>
            </aside>
            <aside className="offsidebar">
              <OffSidebar/>
            </aside>
            <section>
              <div className="content-wrapper">
                  <Alert/>
                  {
                    this.props.pageComponent ? this.props.pageComponent : null
                  }
              </div>
            </section>
            <footer>
              <Footer/>
            </footer>
          </div>
          <div id='body-area'></div>
      </span>
      );
  }
}

export default Layout;
