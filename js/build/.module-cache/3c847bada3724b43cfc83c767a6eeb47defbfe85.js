
var Col1 = React.createClass({displayName: "Col1",
    getInitialState: function(){
        return {
          itemText:'',
            list: [
                {name: 'one', val:1},
                {name: 'two', val:2},
                {name: 'three', val:3},
                {name: 'four', val:4},
            ]
        };
      },
      addItem: function(e){
        var newList = this.state.list.slice();
        newList.push({name:this.state.itemText,val:5});
        this.setState({list: newList, itemText: ''});


      },
      textChange: function(e){
        this.setState({itemText:e.target.value});
      },
      removeItem: function(idx, e){
        var newList = this.state.list.slice();
        newList.splice(idx, 1);
        this.setState({list: newList});
        // alert('remove ' + idx);
      },

      render: function(){
          var self = this;
          var listItems = this.state.list.map(function(item, idx){
          var removeItem = self.removeItem.bind(self, idx);
              return (
                React.createElement("li", {key: idx}, 
                item.name, " is ", item.val, 
                React.createElement("span", {onClick: removeItem}, " X")
                )
                )
          });

          return (
              React.createElement("div", null, 
                  React.createElement("h1", null, "Hi!"), 
                  React.createElement("input", {onChange: this.textChange, value: this.state.itemText, type: "text"}), 
                  React.createElement("button", {onClick: this.addItem}, "Add!"), 
                  React.createElement(MyList, null, 
                      listItems
                  )
              )
          )
      }
  });

var MyList = React.createClass({displayName: "MyList",
    render: function(){
        return (
            React.createElement("ul", null, 
                this.props.children
            )
        );
    }
})

var Col2 = React.createClass({displayName: "Col2",
  render: function(){
    return React.createElement(CountButton, null)
  }
})

var CountButton = React.createClass({displayName: "CountButton",
  getInitialState: function(){
    return {count: 0}
  },
  increment: function(){
    this.setState({count: this.state.count + 1});
  },

  componentWillMount: function(){
    console.log('will mount');
  },

  render: function(){
    console.log('render');
    var count = this.state.count;
    return React.createElement("button", {onClick: this.increment}, this.state.count)
  },
  componentDidMount: function(){
    console.log('did mount');
  },
  componentDidUnMount: function(){
    console.log('')
  },
});

React.render(React.createElement(Col2, null), document.getElementById('col2'));
React.render(React.createElement(Col1, null), document.getElementById('col1'));
// React.render(<MyList />, document.getElementById('col3'))



















