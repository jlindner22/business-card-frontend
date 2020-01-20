import React from 'react';
import './App.css';
import NavBar from './NavBar';
import CardsContainer from './CardsContainer';
import FooterPage from './FooterPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import MyCards from './MyCards';
import CreateCardPage from './CreateCardPage';

let baseURL = "http://localhost:3000"

class App extends React.Component {

  state = {
    allCards: [],
    cardMap: {},
    cardId: null

  }

  componentDidMount() {
    fetch(`${baseURL}/cards`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let cardMap = {}
      data.map(card => cardMap[card.id] = card)
      this.setState({
        allCards: data,
        cardMap
      })
        // ,()=>console.log(this.state.allCards))
    });
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
        phone_number: this.state.phone_number,
        website: this.state.website,
        logo: this.state.logo
        })
      })
  // .then(res => res.json())
  // .then(response => {
      // this.setState({...this.state.formInput}, this.props.toggleNewReviewForm)
    // })
    console.log("submit", this.state.name)
    }
  // )}


  //  this instead? 
   // fetch(`${baseURL}/mycards`, 

//    componentDidUpdate(prevProps) {
//      let cardMap = {}
//      if (this.props !== prevProps) {this.state.allCards.map(card => cardMap[card.id] = card)
//      this.setState({ cardMap })}
//      console.log(this.state.cardMap)
//  }

  render() {

  return (
    <Router>
       <div >
         <div>
       <header>
        <title>Business Cards</title>
        <NavBar/>
      </header></div>
    <body>
      <Switch>
      <Route exact path="/" render={(routerProps) => <Home {...routerProps} 
    allCards={this.state.allCards}     
      />}/>
      <Route exact path="/cards" render={(routerProps) => <CardsContainer {...routerProps} 
    allCards={this.state.allCards} value={this.state.formInput}
    handleSubmit={this.handleSubmit}    
      />}/>
      <Route exact path="/mycards" render={(routerProps) => <MyCards {...routerProps} 
    allCards={this.state.allCards} value={this.state.formInput}
    handleSubmit={this.handleSubmit}    
      />}/>
      <Route exact path="/cards/:id" render={(routerProps) => <CreateCardPage {...routerProps} 
    cardMap={this.state.cardMap} allCards={this.state.allCards} value={this.state.formInput}
    handleSubmit={this.handleSubmit}   
      />}/>
    </Switch>
   </body>
    <FooterPage/>
    </div>
  </Router>
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