import React from 'react';
import { Link } from 'react-router-dom';

const url = "https://technical.ly/baltimore/wp-content/uploads/sites/3/2018/08/wework1-e1533749411790.jpg"

class Home extends React.Component {
  
  render() {
    return (
      <div >
        <br></br>
        <h1 className="text-center font-weight-bold welcome"> Welcome to Carded! </h1>
        <br></br>      
          <img className="center" src={url} alt="Home"></img>
          <br></br> 
        <h4 className="text-center lead">To get started, take a look at our selection of business card   
        <br></br> 
        templates <Link to="/cards"> here </Link> and choose a card to edit with your information.
        </h4> 
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }
}
export default Home;

