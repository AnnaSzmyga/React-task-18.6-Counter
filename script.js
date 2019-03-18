var Counter = React.createClass({
    // getDefaultProps: function() {
    //     console.log('getDefaultProps');
    // },

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

    // componentWillMount: function() {
    //     console.log('componentWillMount - metoda wywoływana przed pierwszym renderowaniem');
    // },

    // componentWillReceiveProps: function() {
    //     console.log('componentWillReceiveProps');
    // },
    // shouldComponentUpdate: function() {
    //     console.log('jeśli metoda zwróci false, to nie dochodzi do ponownego renderowania');
    // },
    // componentWillUpdate: function() {
    //     console.log('componentWillUpdate');
    // },

    render: function() {
        return React.createElement('div', {},
            React.createElement('span', {}, 'Licznik: ' + this.state.counter),
            React.createElement('button', {className: 'plus', onClick: this.increment}, '+'),
            React.createElement('button', {className: 'minus', onClick: this.decrement}, '-'),
        );
    },
    // componentDidMount: function() {
    //     console.log('componentDidMount - możemy w tym miejscu np. wysłać zapytanie do serwera i pobrać dane');
    // },
    // componentDidUpdate: function() {
    //     console.log('componentDidUpdate');
    // },
    // componentWillUnmount: function() {
    //     console.log('componentWillUnmount');
    // }
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
