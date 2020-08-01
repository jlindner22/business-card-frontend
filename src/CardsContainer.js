import React from 'react';
import Card1 from './Card1';
import { Link } from 'react-router-dom';

class CardsContainer extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
// console.log(this.props.allCards)

  return (
    <div>
      <br></br>
    <h1 className="display-4 text-center"> All Cards</h1>
    <br></br>
    <div className="card-deck">
    <div className="container flex row col-sm-12">
      {this.props.allCards.map(card => 
      <Card1 
        name={card.name}
        title={card.title}
        company={card.company}
        address={card.address}
        email={card.email}
        linkedin={card.linkedin}
        phone_number={card.phone_number}
        logo={"https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/999/s300/flatironschool.png"}
        style={card.style}>
        <div><Link to={`/cards/${card.id}`}> <button 
          className="btn btn-primary" onClick={this.props.handleCardClick}>Select </button> </Link></div>
      </Card1>  
      )} 
     </div>
    </div> 
    </div>
    );
  }
}

export default CardsContainer;

