import React from 'react';
import Card1 from './Card1';


class CardsContainer extends React.Component {

  render() {

    console.log(this.props.allCards)

  return (
    <div>
          {this.props.allCards.map(card => <Card1 card={card}/> )} 
    </div>
  );
}
}

export default CardsContainer;
