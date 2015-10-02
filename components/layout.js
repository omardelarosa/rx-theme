import React from 'react/addons';
import TopNavbar from './_topnavbar';

class Layout extends React.Component {
  render () {
    return (
        <span className='main-layout'>
          <div className="wrapper">
            <header className="topnavbar-wrapper">
              <TopNavbar/>
            </header>
            <aside className="aside">
              <div>"layouts/partials/sidebar"</div>
            </aside>
            <aside className="offsidebar">
              <div>"layouts/partials/offsidebar"</div>
            </aside>
            <section>
              <div className="content-wrapper">
                <div className="messages">
                  <div>messages</div>
                </div>
                <div>page content</div>
              </div>
            </section>
            <footer>
              <div>"layouts/partials/footer"</div>
            </footer>
          </div>
          <div id='body-area'></div>
          <div className="modal fade" id="common_confirmation_modal">
            <div className="modal-dialog">
             <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title" id="common_confirmation_modal_title"></h4>
              </div>
              <div className="modal-body" id="common_confirmation_modal_body"></div>
              <div className="modal-footer" id="common_confirmation_modal_buttons">
              </div>
             </div>
            </div>
          </div>
          <div className="hidden x-editable-buttons">
            <button type="submit" className="btn btn-primary btn-sm editable-submit">
              <i className="fa fa-fw fa-check"></i>
            </button>
            <button type="button" className="btn btn-default btn-sm editable-cancel">
              <i className="fa fa-fw fa-times"></i>
            </button>
          </div>
        </span>
      );
  }
}

export default Layout;
