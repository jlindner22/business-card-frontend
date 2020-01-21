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

  render() {
   
  return (
    <div className="text-center">
        <br></br>
        <h1> My Cards</h1>
        <br></br>
        {
            this.state.createdCards.map(cardObj=>{
                
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
                    />
                )
            })




        }
        <button 
          className="btn btn-primary"> Testing testing 123
          </button>
          <br></br>
        <button 
          className="btn btn-primary"> Edit
          </button>
    </div>
  );
}
}
export default MyCards;

//tie edit card button to individual cards
//add functionality to direct to an edit page, 
//create function to send a patch request when button/edit form submitted from edit page 