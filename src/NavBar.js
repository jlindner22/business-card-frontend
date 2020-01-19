import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary navbar-fixed-bottom">
        <a class="navbar-brand" href="#">Business Cards</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link" href="#">My Cards</a>
          </div>
        </div>
      </nav>
    </div>
  );
}
}
export default NavBar;