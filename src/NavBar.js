import React from 'react';
import { Link } from 'react-router-dom';
class NavBar extends React.Component {
  render() {
    const NavStyle = {
      color: 'white',
      padding: 55,
      fontSize: 20,
    };
    return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        {/* <a className="navbar-brand" href="#">Business Cards</a> */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <div className="nav-item nav-link active font-weight-bold my-navbar"> 
              <Link style={NavStyle} to="/"> Home 
              <span className="sr-only">(current)</span>
              </Link>
              <Link style={NavStyle} to="/cards"> All Cards </Link>
              <Link style={NavStyle} to="/mycards"> My Cards </Link>
              </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
}
export default NavBar;

