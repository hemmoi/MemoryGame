var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var MessageModal = React.createClass({
  componentDidMount: function () {
    var modalMarkup = (
      <div id="message-modal" className="reveal small text-center" data-reveal="">
        <h4>Hauskaa Joulua Anu !</h4>
        <img src="http://pngimg.com/upload/small/santa_claus_PNG9959.png"></img>
        <p>
          <button className="button hollow" data-close="">
            Okay
          </button>
        </p>
      </div>
    );
    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);

    var modal = new Foundation.Reveal($('#message-modal'));
    modal.open();
  },
  render: function () {
    return (
      <div></div>
    );
  }
});

module.exports = MessageModal;
