


var Col1 = React.createClass({displayName: "Col1",
    getInitialState: function(){
        return {
            list: [
                {name: 'one', val:1},
                {name: 'two', val:2},
                {name: 'three', val:3},
                {name: 'four', val:4},
            ]
        };
    },
    render: function(){
        var listItems = this.state.list.map(function(item){
            return React.createElement("li", null, item.name, " is ", item.val)
        });

        return (
            React.createElement("div", null, 
                React.createElement("h1", null, "Hi!"), 
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