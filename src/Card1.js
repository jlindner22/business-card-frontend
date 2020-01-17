import React from 'react';
import { Route, Switch } from 'react-router-dom';

class Card1 extends React.Component {

  render() {
    let style;
    let price;
    if(this.props.card.style ==="basic white"){
      style= "card2"
      price = 4.99
    } else if (this.props.card.style ==="basic blue"){
      style= "card3"
      price = 4.99
    } else if (this.props.card.style ==="basic green"){
      style= "card4"
      price = 4.99
    } else if (this.props.card.style ==="basic gray"){
      style= "card5"
      price = 4.99
    } else if (this.props.card.style ==="basic purple"){
      style= "card6"
      price = 4.99
    }
  return (
    <div className="col-sm-6" >
      <div className="business-card ">
        <div className={`card back ${style}`}>
          <div className="top dots"></div>
          <div className="personal-info">
            <p>{this.props.card.name}</p>
            <p>{this.props.card.title}</p>
            <p>{this.props.card.address}</p>
            <p>{this.props.card.phone_number}</p>
            <p>{this.props.card.address}</p>
          </div>
        <div className="bottom dots"></div>
        <div className="pink"></div>
      </div>
        <div>
          <p className="card-title text-center">{this.props.card.style}</p>
        </div>
        <div className="text-center">
          <button href ="#" className="btn btn-primary " onClick={this.props.handleCardClick}>Select</button>
          <div className="card-footer">${`${price}`}</div>
        </div>
      </div>
    </div>
  );
}
}
export default Card1;