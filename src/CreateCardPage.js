import React from 'react';
import Card1 from './Card1';
import FormComponent from './FormComponent';
import { Route, Switch } from 'react-router-dom';

class CreateCardPage extends React.Component {

//   state = {
//     clicked: false
//   }

// handleCardClick = () => {
//   this.setState({
//     clicked: !this.state.clicked
//   })
//   console.log("clicked", this.state.clicked)
// }

  render() {

   const getCard = () => {
     let url = window.location.href.toString()
     let cardId = parseInt(url[url.length - 1])
     return this.props.cardMap[cardId]
    }

    console.log(this.props.cardMap)
    // console.log(getCard())
    //move form to middle
  return (
    <div>
    <div>
     <Card1 card={getCard()}/>
    <br></br>
    <FormComponent/>
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
