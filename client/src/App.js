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
      count: 0

    }
    this.handleClick = this.handleClick.bind(this)
  };

  
  
  
  handleClick() {
    this.setState(prevState => {
        return {
            count: prevState.count + 1
        }
    })
    const hit = () => {
      this.count(0) 
  }
}

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
    <h3>2019</h3>
    <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Press the button for how much you like soccer!</button>
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
