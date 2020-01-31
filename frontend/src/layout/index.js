import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

function Layout(props) {
  const { children, title, subtitle } = props;

  return (
    <Fragment>
      <Header>
        <Navbar username="João Paulo" />
      </Header>

      <Sidebar />

      <div className="content-wrapper">
        {title && (
          <section className="content-header">
            <h1>
              {title}
              {subtitle && <small>{subtitle}</small>}
            </h1>
          </section>
        )}

        <section className="content container-fluid">{children}</section>
      </div>

      <Footer />
    </Fragment>
  );
}

Layout.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

Layout.defaultProps = {
  title: '',
  subtitle: '',
};

export default Layout;
