import React from 'react';
// import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Card1 extends React.Component {

  state={
    clicked: true
  }

  handleClick=()=>{
    this.setState({
      clicked: !this.state.clicked
    },()=>console.log(this.state.clicked))
  }

  render() {

    let style;
    let price;
    if(this.props.style ==="basic white"){
      style= "card2"
      price = 4.99
    } else if (this.props.style ==="basic blue"){
      style= "card3"
      price = 4.99
    } else if (this.props.style ==="basic green"){
      style= "card4"
      price = 4.99
    } else if (this.props.style ==="basic gray"){
      style= "card5"
      price = 4.99
    } else if (this.props.style ==="basic purple"){
      style= "card6"
      price = 4.99
    }


  return (
    <div className="col-sm-6" >
      <div className="business-card " >

        {this.state.clicked?

        <div>
          <p className="text-center">Front</p>
          <div className={`card back ${style}`} onClick={this.handleClick}>
          <div className="personal-info">
            <p>{this.props.name}</p>
            <p>{this.props.title}</p>            <p>{this.props.address}</p>
            <p>{this.props.company}</p>
            <p>{this.props.address}</p>
            <p>{this.props.email}</p>
            <p>{this.props.phone_number}</p>
            <p>{this.props.website}</p>
          </div>
          </div>
        </div>

        :

        <div>
          <p className="text-center">Back</p>
          <div className={`card back ${style}`} onClick={this.handleClick}>
          <div className="personal-info">
            <br></br>
            <img src={this.props.logo} className="logo"></img>
          </div>
        </div>
        </div>
      
        }

        <div>
          <p className="card-title text-center font-weight-bold">{this.props.style.toUpperCase()}</p>
        </div>
        <div className="text-center">
          {this.props.children}
          <div className="card-footer">${`${price}`}</div>
        </div>
      
      </div>
    </div>
  );
}
}
export default Card1;