import React from 'react';
import { Link } from 'react-router-dom';

const url = "https://technical.ly/baltimore/wp-content/uploads/sites/3/2018/08/wework1-e1533749411790.jpg"

class Home extends React.Component {

  render() {
   
  return (
    <div >
        <br></br>
      <h1 className="text-center font-weight-bold"> Welcome to Carded! </h1>
      <br></br>
      <br></br>
      
        <img src={url} className="center"></img>
        <br></br>
       <br></br>
 
       <h3 className="text-center">To get started, take a look at our selection of business card   
       <br></br> 
       templates <Link to="/cards"> here </Link> and choose a card to edit with your information.
       </h3> 
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
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

//breaks to keep footer at/near bottom of screen