import React from 'react';
import { Link } from 'react-router-dom';
import Card1 from './Card1'

class MyCards extends React.Component {

    state = {
        createdCards: []
    }

    componentDidMount() {
        fetch("http://localhost:3000/mycards")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
            this.setState({
                createdCards: data
            },()=>console.log(this.state.createdCards))
        
          });
      }
      handleSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:3000/mycards", {
        method: "PATCH",
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
        //   style: this.state.style
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

     deleteCard = () => {
        fetch("http://localhost:3000/mycards", {
          method: 'delete'
        }).then(response =>
          response.json().then(data => {
            return data;
          })
        );
      }

  render() {
   
  return (
    <div className="text-center">
        <br></br>
        <h1> My Cards</h1>
        <br></br>
        {this.state.createdCards.map(cardObj=>{ 
                return(
                    <Card1
                        key={cardObj.id}
                        name={cardObj.name}
                        title={cardObj.title}
                        company={cardObj.company}
                        address={cardObj.address}
                        email={cardObj.email}
                        linkedin={cardObj.linkedin}
                        phone_number={cardObj.phone_number}
                        website={cardObj.website}
                        logo={cardObj.logo}
                        style={cardObj.style}
                    > <Link to={`/mycards/${cardObj.id}`}>
                    <button className="btn btn-primary" onClick={this.props.handleCardClick}>Edit </button>
                    </Link><br></br>
                    <button className="btn btn-primary" onClick={this.props.handleCardClick}>Delete </button>
                     </Card1>


)}
)}
</div>
    )
    }
}

export default MyCards;

{/* //tie edit card button to individual cards
//add functionality to direct to an edit page, 
//create function to send a patch request when button/edit form submitted from edit page  */}

{/* 
        <button 
          className="btn btn-primary"> Testing testing 123
          </button>
          <br></br>
        <button 
          className="btn btn-primary"> Edit
          </button> */}