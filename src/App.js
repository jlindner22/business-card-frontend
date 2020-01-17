import React from 'react';
import './App.css';
// import '../src/css';
// import '../src/js';
import NavBar from './NavBar';
import CardsContainer from './CardsContainer';
import { Route, Switch } from 'react-router-dom';


let baseURL = "http://localhost:3000/"

class App extends React.Component {

  state = {
    allCards: [],
    formInput: ''
  }

  componentDidMount() {
    fetch(`${baseURL}/cards`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.setState({
        allCards: data})
        // ,()=>console.log(this.state.allCards))
    });
  }

  handleChange = (e) => {
  this.setState({
      [e.target.name]: e.target.value
  })
  console.log(this.state.formInput)
  }

  handleSubmit = (e) => {
    //post info in inputs to backend and navigate to My Cards page
    e.preventDefault()
    fetch(`${baseURL}/cards/${this.props.cardId}/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json",
      },
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(response => {
        // this.setState({...this.state.formInput}, this.props.toggleNewReviewForm)
      // })
      console.log("submit")
    }
    )}

  render() {
  return (
       <div >
         <div>
       <header>
        <title>Business Cards</title>
        <NavBar/>
      </header></div>
    <body>
    {/* <Switch> */}
      {/* <Route exact path="/" render={() => <div>HOME Page</div>} /> */}
      {/* <Route path="/login" component={Login}/> */}
      {/* <Route path="/signup" component={Signup}/> */}
          {/* <Route path="/cards/:id" render={() => <div>DIS A MOVIE 🎞</div>} /> */}
      {/* <Route path="/cards" render={(routerProps) => 
    {/* </Switch> */}
      <CardsContainer 
      // {...routerProps} 
      handleChange={this.handleChange}    
       allCards={this.state.allCards}
    value={this.state.formInput}
    handleSubmit={this.handleSubmit}/> 
   </body>
    </div>
  );
}
}

export default App;


// import React from 'react';
// import './App.css';
// import NavBar from './NavBar';
// import CardsContainer from './CardsContainer';
// class App extends React.Component {


//   render() {
//   return (
//     <div >
//       <header>
//         <title>Business Cards</title>
//         <NavBar/>
//       </header>
//       <body>
//     <CardsContainer allCards={this.state.allCards}/> 
//       </body>
//     </div>
//   );
// }
// }
// export default App;