import React from 'react';
import Card1 from './Card1';
import CreateCardPage from './CreateCardPage';
import { Link } from 'react-router-dom';

class CardsContainer extends React.Component {

  state = {
    clicked: false
  }

handleCardClick = () => {
  this.setState({
    clicked: !this.state.clicked
  })
  // console.log("card", typeof this)
  // console.log("card id", this.props.card.id)
  // console.log("clicked", this.state.clicked)
}
  render() {
// console.log(this.props.allCards)

  return (
    <div className="card-deck">
    <div className="container flex row col-sm-12">
      {/* {!this.state.clicked} ?  */}
      {this.props.allCards.map(card => 
      <Card1 card={card}>
        <Link to={`/cards/${card.id}`}> <button 
          className="btn btn-primary" onClick={this.handleCardClick}>Select </button> </Link>
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

