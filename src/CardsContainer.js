import React from 'react';
import Card1 from './Card1';
import CreateCardPage from './CreateCardPage';
import FormComponent from './FormComponent';

import { Route, Switch } from 'react-router-dom';

class CardsContainer extends React.Component {

  state = {
    clicked: false
  }

handleCardClick = () => {
  this.setState({
    clicked: !this.state.clicked
  },()=> console.log("clicked", this.state.clicked))
}

  render() {


  return (
    <div class="card-deck">
    <div className="container flex row col-sm-12">
      {!this.state.clicked ? this.props.allCards.map(card => <Card1 card={card}
      handleCardClick={this.handleCardClick}/> ) : <FormComponent/>}
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

export default CardsContainer;




// class CardsContainer extends React.Component {
//   state={
//     clicked: false
//   }
//   render() {
//     // console.log(this.props.allCards)
//     return (
//       <div>
//         <div>
//         <div class="card-deck">
//             {this.props.allCards.map(card=>
//                 <div className="container flex row col-sm-12">
//                     <Card1
//                       id={card.id}
//                       card={card}
//                       clicked={this.state.clicked}
//                     />
//                 </div>
//               )
//             }
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// export default CardsContainer;