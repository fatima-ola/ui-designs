import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar container navbar-expand-md navbar-dark bg-dark">
      <a className="navbar-brand" href="0#">
        Front<span className="text fw-bold">Edge</span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item mx-4 p-2 text-center text-muted">
            <i className="fa fa-home text-light m-0 p-0" aria-hidden="true" />
            <a className="nav-link m-0 p-0" aria-current="page" href="0#">
              Home
            </a>
          </li>
          <li className="nav-item mx-4 p-2 text-center text-muted">
            <i
              className="fa fa-credit-card-alt text-light m-0 p-0"
              aria-hidden="true"
            />
            <a className="nav-link m-0 p-0" href="0#">
              Invoices
            </a>
          </li>
          <li className="nav-item mx- p-2 text-center text-muted">
            <i
              className="fa fa-clipboard text-light m-0 p-0"
              aria-hidden="true"
            />
            <a className="nav-link m-0 p-0" href="0#">
              Transactions
            </a>
          </li>
          <li className="nav-item mx-4 p-2 text-center active active-bg border border-0 rounded">
            <i
              className="fa fa-address-book text-light m-0 p-0"
              aria-hidden="true"
            />
            <a className="nav-link m-0 p-0 text-light" href="0#">
              Customers
            </a>
          </li>
        </ul>
        <div className="user-profile d-flex">
          <img
            className="user-avatar border border-primary border-3 rounded rounded-3 mx-1"
            src="https://source.unsplash.com/random/100x100/?nature"
            alt="avatar"
            style={{ width: 50, height: 50 }}
          />
          <div className="text text-light">
            <span className="user-name">Babatunde Calebs</span>
            <br />
            <small className="text-muted">Exporter</small>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
