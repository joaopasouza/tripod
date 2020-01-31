import React from 'react';

function Header(props) {
  const { children } = props;

  return (
    <header className="main-header">
      {/* logo */}
      <a href="/" className="logo">
        <span className="logo-mini">
          <b>M</b>Sr
        </span>

        <span className="logo-lg">
          <b>Med</b>Sênior
        </span>
      </a>

      {/* navbar */}
      {children}
    </header>
  );
}

export default Header;
