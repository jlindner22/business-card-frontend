import React from 'react';


class Card1 extends React.Component {

  render() {
console.log(this.props.card)

  return (

<div class="container">
  <div class="card">
    
    <div class="front side">
      <h1 class="logo">Zach Saucier</h1>
    </div>
    
    <div class="back side">
      <h3 class="name"> {this.props.card.name}</h3>
      <div>{this.props.card.title}</div>      
      <div class="info">
      <p><span class="property">Company: </span>{this.props.card.company}</p>
      <p><span class="property">Address: </span>{this.props.card.address}</p>
        <p><span class="property">Email: </span>{this.props.card.email}</p>
        <p><span class="property">LinkedIn: </span>{this.props.card.linkedin}</p>
        <p><span class="property">Phone: </span>{this.props.card.phone_number}</p>
        <p><span class="property">Website: </span>{this.props.card.website}</p>
      </div>
    </div>
    
  </div>
</div>
  );
}
}

export default Card1;