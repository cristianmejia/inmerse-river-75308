import React from 'react'
import { render } from 'react-dom'
import App from './components/app'
import './styles/app.scss'

render(<App/>, document.getElementById('main'))
/*
WebAppExample ReactJS example
*/

var TimerExample = React.createClass({
    getInitialState: function(){ return { elapsed: 0 }; },
    componentDidMount: function(){ this.timer = setInterval(this.tick, 300); },
    componentWillUnmount: function(){ clearInterval(this.timer); },
    tick: function(){
        this.setState({elapsed: new Date() - this.props.start});
    },
    render: function() {
        var elapsed = Math.round(this.state.elapsed / 100);
        var seconds = (elapsed / 10).toFixed(1);    
        return <span>Loaded <b>{seconds} seconds</b> ago.</span>;
    }
});
var Year = React.createClass({
    render: function() {
        var thisyear = new Date().getFullYear();
        return <strong>{thisyear}</strong>;
    }
});
var Email = React.createClass({
  render: function() {
    var emailhref = 'mailto:'+this.props.email;
    return <a className="grey-text text-lighten-4 right" href={emailhref}>Email me!</a>
  }
});

ReactDOM.render(<TimerExample start={Date.now()} />, document.getElementById('counter'));
ReactDOM.render(<Year thisyear={Date.now()} />, document.getElementById('year'));
ReactDOM.render(<Email email="cristian.mejia@gmail.com" />, document.getElementById('emailme'));