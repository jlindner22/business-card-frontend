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
    website: "Website",
    logo: "https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/999/s300/flatironschool.png",
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
     let splitUrl = url.split("/")[4]
     let cardId = parseInt(splitUrl)
     let currentCard=this.props.allCards.find(card=> card.id === cardId)
     return (
       <div className = "container">
      <Card1
        name={this.state.name}
        title={this.state.title}
        company={this.state.company}
        address={this.state.address}
        email={this.state.email}
        phone_number={this.state.phone_number}
        website={this.state.website}
        logo={this.state.logo}
        style={currentCard.style}
      />
      </div>
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
