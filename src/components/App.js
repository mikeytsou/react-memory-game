import React, { Component } from 'react';
import shuffle from 'shuffle-array';
import NavBar from './NavBar';
import Card from './Card';

// A card ban be in 1 of 3 CardStates
const CardState = {
  HIDING: 0,
  SHOWING: 1,
  MATCHING: 2
};

class App extends Component {
  constructor(props) {
    super(props);

    // The cards that will be used for our state
    let cards = [
      {id: 0, cardState: CardState.HIDING, backgroundColor: 'red'},
      {id: 1, cardState: CardState.HIDING, backgroundColor: 'red'},
      {id: 2, cardState: CardState.HIDING, backgroundColor: 'navy'},
      {id: 3, cardState: CardState.HIDING, backgroundColor: 'navy'},
      {id: 4, cardState: CardState.HIDING, backgroundColor: 'green'},
      {id: 5, cardState: CardState.HIDING, backgroundColor: 'green'},
      {id: 6, cardState: CardState.HIDING, backgroundColor: 'yellow'},
      {id: 7, cardState: CardState.HIDING, backgroundColor: 'yellow'},
      {id: 8, cardState: CardState.HIDING, backgroundColor: 'black'},
      {id: 9, cardState: CardState.HIDING, backgroundColor: 'black'},
      {id: 10, cardState: CardState.HIDING, backgroundColor: 'purple'},
      {id: 11, cardState: CardState.HIDING, backgroundColor: 'purple'},
      {id: 12, cardState: CardState.HIDING, backgroundColor: 'pink'},
      {id: 13, cardState: CardState.HIDING, backgroundColor: 'pink'},
      {id: 14, cardState: CardState.HIDING, backgroundColor: 'lightskyblue'},
      {id: 15, cardState: CardState.HIDING, backgroundColor: 'lightskyblue'}
    ];

    this.state = {
      cards: shuffle(cards)
    };

    this.handleNewGame = this.handleNewGame.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleNewGame() {

  }

  handleClick() {

  }

  render() {
    const renderCards = this.state.cards.map(card => (
      <Card
        key={card.id}
        showing={card.cardState !== CardState.HIDING}
        backgroundColor={card.backgroundColor}
        onClick={this.handleClick(card.id)}
      />
    ));

    return (
      <div className="app">
        <NavBar onReset={this.handleNewGame} />
        {renderCards}
      </div>
    );
  }
}

export default App;
