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
        "http://pngimg.com/upload/cat_PNG1631.png",
        "http://pngimg.com/upload/parrot_PNG723.png",
        "http://pngimg.com/upload/small/pig_PNG2210.png",
        "http://pngimg.com/upload/cow_PNG2132.png",
        "http://pngimg.com/upload/rabbit_PNG5638.png",
        "https://s-media-cache-ak0.pinimg.com/564x/5c/d1/2d/5cd12dede90464b6d0200ab43dd46e41.jpg"
    ];

    var classes = Classnames(
      'Card',
      {'Card--flipped': this.props.flipped},
      {'Card--matched': this.props.matched}
    );
    var cardValue = this.props.flipped ? this.props.value : '7';

    return (
      <div className={classes} onClick={this.handleClick}>
        <img src={images[cardValue -1]}></img>
      </div>
    );
  }
}
);


module.exports = Card;
