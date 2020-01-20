import React from 'react';
import { Link } from 'react-router-dom';
class MyCards extends React.Component {

  render() {
   
  return (
    <div className="text-center">
        <br></br>
        <h1> My Cards</h1>
        <br></br>
        
        <button 
          className="btn btn-primary"> Testing testing 123
          </button>
          <br></br>
        <button 
          className="btn btn-primary"> Edit
          </button>
    </div>
  );
}
}
export default MyCards;

//tie edit card button to individual cards
//add functionality to direct to an edit page, 
//create function to send a patch request when button/edit form submitted from edit page 