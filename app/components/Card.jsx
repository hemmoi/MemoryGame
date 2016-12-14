var React = require('react');
var Classnames = require('classnames');

var Card = React.createClass({
  handleClick(e) {
    if (!this.props.flipped) {
      this.props.checkMatch(this.props.value, this.props.id);
    }
  },

  render: function () {
    var images = [
        "http://pngimg.com/upload/dog_PNG2422.png",
        "http://pngimg.com/upload/cat_PNG106.png",
        "http://pngimg.com/upload/parrot_PNG723.png",
        "http://pngimg.com/upload/small/pig_PNG2210.png",
        "http://pngimg.com/upload/cow_PNG2132.png",
        "http://pngimg.com/upload/rabbit_PNG5638.png"
    ];

    var classes = Classnames(
      'Card',
      {'Card--flipped': this.props.flipped},
      {'Card--matched': this.props.matched}
    );
    var cardValue = this.props.flipped ? this.props.value : '';
//    debugger;
    return (
      <div className={classes} onClick={this.handleClick}>
        <img src={images[cardValue -1]} alt={images[cardValue -1]}></img>
      </div>
    );
  }
}
);

// <img src={images[cardValue -1]} alt={images[cardValue -1]}></img>

module.exports = Card;
