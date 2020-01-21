import React from 'react';
import './App.css';
import NavBar from './NavBar';
import CardsContainer from './CardsContainer';
import FooterPage from './FooterPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import MyCards from './MyCards';
import CreateCardPage from './CreateCardPage';
import EditCardPage from './EditCardPage';

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
    allCards={this.state.allCards}     
      />}/>
      <Route exact path="/mycards" render={(routerProps) => <MyCards {...routerProps} 
    allCards={this.state.allCards}     
      />}/>
      <Route exact path="/cards/:id" render={(routerProps) => <CreateCardPage {...routerProps} 
    cardMap={this.state.cardMap} allCards={this.state.allCards}    
      />}/>
          <Route exact path="/mycards/:id" render={(routerProps) => <EditCardPage {...routerProps} 
    cardMap={this.state.cardMap} allCards={this.state.allCards}    
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