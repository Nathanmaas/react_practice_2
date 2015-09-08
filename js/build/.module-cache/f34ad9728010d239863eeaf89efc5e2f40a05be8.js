var Col1 = React.createClass({displayName: "Col1",
  render: function(){
    return (
      React.createElement("div", null, 
      React.createElement("h1", null, "Hi!"), 
      React.createElement(MyList, null, 
         React.createElement("li", null, "item 1"), 
         React.createElement("li", null, "item 2")
         ), 

      React.createElement("h3", null, "another thing")
      )
    )
  }
});

var MyList = React.createClass({displayName: "MyList",
  render: function(){
    return (
      React.createElement("ul", null, 
        React.createElement("li", null, "item")
      )
      );
  }
})

React.render(React.createElement(Col1, null), document.getElementById('col1'))