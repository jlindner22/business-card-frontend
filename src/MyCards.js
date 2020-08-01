import React from 'react';
import Card1 from './Card1'
import EditCardPage from './EditCardPage';

class MyCards extends React.Component {

    state = {
        createdCards: [],
        editing: false
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

     deleteCard = (card) => {
        fetch(`http://localhost:3000/mycards/${card.id}`, {
          method: 'DELETE',
        })
            this.setState({
                createdCards: [...this.state.createdCards].filter(deleteCard => card !== deleteCard)
            })
    }

      clickedEditButton = () => {
            this.setState({editing: !this.state.editing})
            console.log(this.state.editing)
      }

  render() {
    return (
        <div className="text-center">
            <br></br>
            <h1 className="display-4"> My Cards</h1>
            <br></br>
            {this.state.editing ? <EditCardPage/> : 
            this.state.createdCards.map(cardObj=>{ 
                return (
                    <div className="card-deck">
                    <div className="container flex row col-sm-12">
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
                        > 
                        {/* <Link to={`/mycards/${cardObj.id}`}>
                        <button className="btn btn-primary" onClick={this.clickedEditButton}>Edit </button>
                        </Link> */}
                        {/* <br></br> */}
                        <button className="btn btn-primary" onClick={()=> this.deleteCard(cardObj)}>Delete </button>
                    </Card1>
            </div>
            </div>
                    )}
                )}
            
        </div>
        )
     }
}

export default MyCards;
