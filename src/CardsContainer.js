import React from 'react';
import Card1 from './Card1';
import CreateCardPage from './CreateCardPage';
import { Link } from 'react-router-dom';

class CardsContainer extends React.Component {

  
  render() {
// console.log(this.props.allCards)

  return (
    <div className="card-deck">
    <div className="container flex row col-sm-12">
      {/* {!this.state.clicked} ?  */}
      {this.props.allCards.map(card => 
      <Card1 
        name={card.name}
        title={card.title}
        company={card.company}
        address={card.address}
        email={card.email}
        phone_number={card.phone_number}
        logo={card.logo}
        style={card.style}
      >
        <Link to={`/cards/${card.id}`}> <button 
          className="btn btn-primary" onClick={this.props.handleCardClick}>Select </button> </Link>
      </Card1>  
      )} 
        
      {/* : */}
        {/* {this.props.allCards.map(card => <CreateCardPage card={card}/>)} */}
     {/* <FormComponent handleChange={this.props.handleChange}
     value={this.props.formInput} 
     handleSubmit={this.handleSubmit}/>  */}
     </div>
    </div> 
    );
  }
}

export default CardsContainer;

