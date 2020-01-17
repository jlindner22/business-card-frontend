import React from 'react';

class Card2 extends React.Component {

  render() {

  return (

<div class="card2 back">
  <div class="yellow"></div>
  <div class="top dots"></div>
  <div class="personal-info">
    <p>{this.props.card.name}</p>
    <p><span>{this.props.card.title}</span></p>
    <p>{this.props.card.address}</p>
    <p>{this.props.card.email}</p>
    <p>{this.props.card.phone_number}</p>
    <p>{this.props.card.website}</p>
    <p>{this.props.card.linkedin}</p>
  </div>
  <div class="bottom dots"></div>
  <div class="pink"></div>
</div>



    // <div class="back side">
    //   <h3 class="name"> {this.props.card.name}</h3>
    //   <div>{this.props.card.title}</div>      
    //   <div class="info">
    //   <p><span class="property">Company: </span>{this.props.card.company}</p>
    //   <p><span class="property">Address: </span>{this.props.card.address}</p>
    //     <p><span class="property">Email: </span>{this.props.card.email}</p>
    //     <p><span class="property">LinkedIn: </span>{this.props.card.linkedin}</p>
    //     <p><span class="property">Phone: </span>{this.props.card.phone_number}</p>
    //     <p><span class="property">Website: </span>{this.props.card.website}</p>
    //   </div>
    // </div>
    
//   </div>
// </div>
  );
}
}

export default Card2;


// <div class="card front">
//   <div class="blue"></div>
//   <div class="yellow"></div>
//   <div class="pink"></div>
//   <div class="dots"></div>
//   <div class="personal-intro">
//     <p>Krista Stone</p>
//     <p>Photographer Maker Doer</p>
//   </div>
// </div>
// <div class="card back">
//   <div class="yellow"></div>
//   <div class="top dots"></div>
//   <div class="personal-info">
//     <p>Krista Stone</p>
//     <p>Photographer. Maker. Doer.</p>
//     <p>123 Address St</p>
//     <p>Sacramento, CA 14234</p>
//     <p>567.890.1234</p>
//     <p>www.kristastone.com</p>
//     <p>@kristastone</p>
//   </div>
//   <div class="bottom dots"></div>
//   <div class="pink"></div>
// </div>