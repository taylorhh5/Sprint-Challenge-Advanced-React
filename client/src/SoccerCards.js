import React from 'react';
import './App.css';

class Cards extends React.Component {
    render(){
    return(
        
        <div statcard>
            <h1>Player</h1>
            <h1>Name: {this.props.stats.name}</h1>
            <h1>Country: {this.props.stats.country}</h1>
            <h1>Searches: {this.props.stats.searches}</h1>
            

         
      </div>
        
    )
}
}

export default Cards;