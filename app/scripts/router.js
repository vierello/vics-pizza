var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

var HomePageComponent = require('./components/home.jsx').HomePageComponent;
var PrintableMenuComponent = require('./components/home.jsx').PrintableMenuComponent;

var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'home/': 'index',
    'menu/': 'menu',
    'printablemenu/': 'printableMenu'
  },

  index: function(){
    ReactDOM.render(
      React.createElement(HomePageComponent),
      document.getElementById('container')
    )
  },

  menu: function(){
    ReactDOM.render(
      React.createElement(MenuComponent),
      document.getElementById('container')
    )
  },

  printableMenu: function(){
    ReactDOM.render(
      React.createElement(PrintableMenuComponent),
      document.getElementById('container')
    )
  }
});

var router = new Router();

module.exports = router;
