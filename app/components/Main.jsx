var React = require('react');
var Game = require('Game');

var Main = (props) => {
  return(
    <div>
      <hi>Memory Game</hi>
      {props.children}
    </div>
  );
};

module.exports = Main;
