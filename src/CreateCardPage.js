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


  return (
    <div>
    <div>
    {this.props.allCards.map(card => <Card1 card={card}/>)}
    <FormComponent/>}
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
