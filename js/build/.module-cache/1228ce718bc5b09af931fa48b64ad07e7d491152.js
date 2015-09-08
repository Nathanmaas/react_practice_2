var Col1 = React.createClass({displayName: "Col1",
  render: function(){
    return (
      React.createElement("div", null, 
      React.createElement("h1", null, "Hi!"), 
      React.createElement("h3", null, "another thing")
      )
      )
  }
});

React.render(React.createElement(Col1, null), document.getElementById('col1'))