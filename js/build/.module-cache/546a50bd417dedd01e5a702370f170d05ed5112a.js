
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

      render: function(){
          var listItems = this.state.list.map(function(item, idx){
              return React.createElement("li", {key: idx}, item.name, " is ", item.val)
          });

          return (
              React.createElement("div", null, 
                  React.createElement("h1", null, "Hi!"), 
                  React.createElement("input", {onChange: this.textChange, type: "text"}), 
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

React.render(React.createElement(Col1, null), document.getElementById('col1'));
// React.render(<MyList />, document.getElementById('col3'))