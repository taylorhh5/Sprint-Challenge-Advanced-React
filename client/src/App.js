import React from 'react';
import './App.css';
import axios from 'axios';
import Cards from './SoccerCards.js';
import Navbar from './NavBar.js'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      stats: [],      


    }
  };

  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/players`)
      // .then(res => console.log(1, res.data))
      .then(res => this.setState({ stats: res.data }))

      // .catch(err => console.log('noooo'));

   
  }


  render() {
    return (
 
  <div className="stats">
    <h1>Statistics</h1>
    <Navbar />
      {this.state.stats.map(stats => (
        <Cards
        stats={stats}
          
        />


      ))}
        
    </div >
    )

}
}


export default App;
