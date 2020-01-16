import React from 'react';
import './App.css';
// import '../src/css';
// import '../src/js';
import NavBar from './NavBar';
import CardsContainer from './CardsContainer';


class App extends React.Component {

  state = {
    allCards: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/cards')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.setState({
        allCards: data})
        // ,()=>console.log(this.state.allCards))
    });
  }

  render() {
  return (
    <div >
    <NavBar/>
    <CardsContainer allCards={this.state.allCards}/> 
      <header>
    {/* <button type="button" className="btn btn-primary">Button</button> */}

  
      </header>
    </div>
  );
}
}

export default App;
