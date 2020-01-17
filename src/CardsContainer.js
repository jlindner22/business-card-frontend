import React from 'react';
import Card1 from './Card1';
import Card2 from './Card2';


class CardsContainer extends React.Component {

  render() {

    console.log(this.props.allCards)

  return (
    <div>
    <div>
      {this.props.allCards.map(card => <Card1 card={card}/> )} 
    </div>

    <div>
      {/* {this.props.allCards.map(card => <Card2 card={card}/> )}  */}
    </div>
    </div>
  );
}
}

export default CardsContainer;
