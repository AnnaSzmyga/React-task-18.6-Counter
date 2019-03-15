var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },
    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('span', {}, 'Licznik: ' + this.state.counter),
            React.createElement('button', {className: 'plus', onClick: this.increment}, '+'),
            React.createElement('button', {className: 'minus', onClick: this.decrement}, '-'),
        );
    }
});

var Counters = React.createClass({
    render : function() {
        return React.createElement('div', {}, 
                React.createElement(Counter, {className: 'counter1'}),
                React.createElement(Counter, {className: 'counter2'}),
                React.createElement(Counter, {className: 'counter3'})
            )
    }
})
var element = React.createElement(Counters);

ReactDOM.render(element, document.getElementById('app'));
