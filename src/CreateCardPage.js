import React from 'react';
import Card1 from './Card1';
import FormComponent from './FormComponent';
import { Route, Switch } from 'react-router-dom';
import MyCards from './MyCards';

let baseURL = "http://localhost:3000"

class CreateCardPage extends React.Component {

  state = {
    submitted: false,
    name: "Your Name",
    title: "Title",
    company: 'Company',
    address: 'Company Address',
    email: 'Email',
    linkedin: "LinkedIn",
    phone_number: 'Phone Number',
    website: "Website",
    logo: "https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/999/s300/flatironschool.png",
    style: '',
    myCards: []
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    },()=>console.log(this.state.name))
  }

  //post info in inputs to backend and navigate to My Cards page
  handleSubmit = (e) => {
    e.preventDefault()
   // fetch(`${baseURL}/cards/${this.props.cardId}/cart`, 
 // {
    fetch(`${baseURL}/mycards`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json",
      },
        body: JSON.stringify({
        name: this.state.name,
        title: this.state.title,
        company: this.state.company,
        address: this.state.address,
        email: this.state.email,
        linkedin: this.state.linkedin,
        phone_number: this.state.phone_number,
        website: this.state.website,
        logo: this.state.logo,
        style: this.state.style
        })
      })
  .then(res => res.json())
  .then(data => {
        this.setState ({
            myCards: [...this.state.myCards, data]
        })
        
        console.log("form data", data)
        console.log("mycards", this.state.myCards)

    }
  )}
  // )}

  render() {

    // console.log(this.props.cardMap)

    const setStyle=(style)=>{
        if (this.state.style === ''){
            this.setState({
                style: style
            },()=> console.log(this.state.style))

        }
    }

   const getCard = () => {
     let url = window.location.href.toString()
     let splitUrl = url.split("/")[4]
     let cardId = parseInt(splitUrl)
     let currentCard = this.props.allCards.find(card=> card.id === cardId)
     let cardStyle = currentCard.style
     setStyle(cardStyle)

         
        return (
            <div className = "container">
             <Card1
                name={this.state.name}
                title={this.state.title}
                company={this.state.company}
                address={this.state.address}
                email={this.state.email}
                linkedin={this.state.linkedin}
                phone_number={this.state.phone_number}
                website={this.state.website}
                logo={this.state.logo}
                style={cardStyle}
            />
            </div>
        )
    }

  return (
    <div className="container">
    <div className="row">
    <div className="col-sm">
     {getCard()}
     </div>
    <br></br>
    <div className="col-sm">
    <FormComponent
      style={this.state.style}
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
    />
    {/* <MyCards handleSubmit={this.handleSubmit}/> */}
    </div>
    </div>
    </div>
    
  );
}
}

export default CreateCardPage;
