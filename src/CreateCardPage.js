import React from 'react';
import Card1 from './Card1';
import FormComponent from './FormComponent';
import { Route, Switch } from 'react-router-dom';

class CreateCardPage extends React.Component {

  state = {
    name: "Your Name",
    title: "Title",
    company: 'Company',
    address: 'Address',
    email: 'email',
    phone_number: 'Phone Number',
    logo: 'Logo',
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    },()=>console.log(this.state.name))
  }

  render() {

    console.log(this.props.cardMap)

   const getCard = () => {
     let url = window.location.href.toString()
     let cardId = parseInt(url[url.length - 1])
     console.log(cardId)
     let currentCard=this.props.allCards.find(card=> card.id === cardId)
     return (
      <Card1
        name={this.state.name}
        title={this.state.title}
        company={this.state.company}
        address={this.state.address}
        email={this.state.email}
        phone_number={this.state.phone_number}
        logo={this.state.logo}
        style={currentCard.style}
      />
    )
    }



  return (
    <div>
    <div>
     {getCard()}
    <br></br>
    <FormComponent
      handleChange={this.handleChange}
    />
    {/* //   :
    // <FormComponent handleChange={this.props.handleChange}
     value={this.props.formInput} 
     handleSubmit={this.handleSubmit}/> } 
     </div>
     <div> */}
    </div>
    </div>
    
  );
}
}

export default CreateCardPage;
