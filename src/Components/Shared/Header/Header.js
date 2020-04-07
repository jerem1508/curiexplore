import React from 'react';

import classes from './Header.scss';

const Header = () => (
  <section className={classes.Header}>
    <nav className={`navbar navbar-expand-lg ${classes.Colors}`}>
      <ScrollLogo />
      <a className="navbar-brand" href="/">
        CurieXplore
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className={classes.Link} href="/cartographie">
              Cartographie ESRI
            </a>
          </li>
          <li className="nav-item">
            <a className={classes.Link} href="/focus">
              Focus
            </a>
          </li>
          <li className="nav-item">
            <a className={classes.Link} href="/annuaire">
              Annuaire
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className={`dropdown-toggle ${classes.Link}`}
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              A propos
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </li>

        </ul>

      </div>
    </nav>
  </section>
);

class ScrollLogo extends React.Component {
  handleScroll = (e) => {
    const element = e.target;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      // do something at end of scroll
    }
  }

  render() {
    return (
      <div className="content-container" onScroll={() => this.handleScroll()}>
        <img
          className={`img-thumbnail ${classes.img}`}
          src="./img/logo-ministere.svg"
          alt="logo ministère"
        />
      </div>
    );
  }
}

export default Header;
