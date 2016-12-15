var React = require('react');
var Card = require ('Card');

var Game = React.createClass ({

  initialCards: function () {
    return [
     {value: 1, matched: false, flipped: false},
     {value: 1, matched: false, flipped: false},
     {value: 2, matched: false, flipped: false},
     {value: 2, matched: false, flipped: false},
     {value: 3, matched: false, flipped: false},
     {value: 3, matched: false, flipped: false},
     {value: 4, matched: false, flipped: false},
     {value: 4, matched: false, flipped: false},
     {value: 5, matched: false, flipped: false},
     {value: 5, matched: false, flipped: false},
     {value: 6, matched: false, flipped: false},
     {value: 6, matched: false, flipped: false}
   ]
 },

 shuffleCards: function (array) {
   var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
   while (0 !== currentIndex) {
     // Pick a remaining element...
     randomIndex = Math.floor(Math.random() * currentIndex);
     currentIndex -= 1;
     // And swap it with the current element.
     temporaryValue = array[currentIndex];
     array[currentIndex] = array[randomIndex];
     array[randomIndex] = temporaryValue;
   }
   return array;
 },

  getInitialState: function () {
    return {
      cards: this.shuffleCards(this.initialCards()),
      lastCard: null,
      locked: false,
      matches: 0
    };
  },


  checkMatch: function (value, id) {
    if (this.state.locked) {
      return;
    }

    var cards = this.state.cards;
    cards[id].flipped = true;
    this.setState({cards, locked: true});
    if (this.state.lastCard) {
      if (value === this.state.lastCard.value) {
        var matches = this.state.matches;
        cards[id].matched = true;
        cards[this.state.lastCard.id].matched = true;
        this.setState({cards, lastCard: null, locked: false, matches: matches + 1});
      } else {
        setTimeout(() => {
          cards[id].flipped = false;
          cards[this.state.lastCard.id].flipped = false;
          this.setState({cards, lastCard: null, locked: false});
        }, 1000);
      }
    } else {
      this.setState({
        lastCard: {id, value},
        locked: false
      });
    }
  },
  renderCards: function (cards) {
    return cards.map((card, index) => {
      return (
        <div>
          <Card
            key={index}
            value={card.value}
            id={index}
            matched={card.matched}
            flipped={card.flipped}
            checkMatch={this.checkMatch}>
        </Card>
        </div>
      );
    });
  },

  reset: function () {
    this.setState({
      cards: this.shuffleCards(this.initialCards()),
      lastCard: null,
      locked: false,
      matches: 0
    });
  },

  render: function() {
    var btnText = 'Reset';
    if (this.state.matches === this.state.cards.length / 2) {
      btnText = 'Play Again?';
    }
    return (
      <div className="Game">
        <h1 className="page-title expanded">Memory Game</h1>
        {this.renderCards(this.state.cards)}
        <button className="button expanded" onClick={this.reset}>{btnText}</button>
      </div>
    );
  }
});

module.exports = Game;
