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

    let cards = shuffle(this.props.cards);

    this.state = {
      cards,
      noClick: false
    };
  }

  handleNewGame() {
    let cards = this.state.cards.map(card => {
      return {
        ...card,
        cardState: CardState.HIDING
      }
    });
    cards = shuffle(cards);
    this.setState({cards});
  }

  handleClick(id) {
    const mapCardState = (cards, idsToChange, newCardState) => {
      return cards.map(card => {
        if(idsToChange.includes(card.id)) {
          return {
            ...card,
            cardState: newCardState
          };
        }

        return card;
      });
    }

    const foundCard = this.state.cards.find(card => card.id === id);
    console.log('FOUND CARD: ', foundCard);

    if(this.state.noClick || foundCard.cardState !== CardState.HIDING) {
      return;
    }

    let noClick = false;

    let cards = mapCardState(this.state.cards, [id], CardState.SHOWING);

    const showingCards = cards.filter(card => card.cardState === CardState.SHOWING);
    console.log('SHOWING CARDS: ', showingCards);

    const ids = showingCards.map(card => card.id);

    if(showingCards.length === 2 && showingCards[0].backgroundColor === showingCards[1].backgroundColor) {
      cards = mapCardState(cards, ids, CardState.MATCHING);
    }
    else if(showingCards.length === 2) {
      let hidingCards = mapCardState(cards, ids, CardState.HIDING);
      console.log('HIDING CARDS: ', hidingCards);

      noClick = true;

      this.setState({cards, noClick}, () => {
        setTimeout(() => {
          // set the state of the cards to HIDING after 1.3 seconds
          this.setState({
            cards: hidingCards,
            noClick: false
          });
        }, 1300);
      });

      return;
    }

    this.setState({cards, noClick});
  }

  render() {
    const renderCards = this.state.cards.map(card => (
      <Card
        key={card.id}
        showing={card.cardState !== CardState.HIDING}
        backgroundColor={card.backgroundColor}
        onClick={this.handleClick.bind(this, card.id)}
      />
    ));

    return (
      <div className="app">
        <NavBar onNewGame={this.handleNewGame.bind(this)} />
        {renderCards}
      </div>
    );
  }
}

// The cards that will be used for our state
App.defaultProps = {
  cards: [
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
  ]
}

export default App;
