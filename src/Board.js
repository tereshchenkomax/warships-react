import React, { Component } from 'react';
import { Table } from './Table';
import  Input  from './Input';
import  Output  from './Output';
import  StartButton  from './StartButton';

export default class Board extends Component {
	constructor(props) {
    	super(props);
    	this.state = {
    		started: false,
      		value: '',
      		msg: 'PLEASE Start game, push the button below'
    	};    	
    	this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);    	
    	this.handleClick = this.handleClick.bind(this);
  	}
  	
	handleChange(event) {
        const value = event.target.value;
 		if (event.target.value > 2) {
 			this.setState({msg: "Put correct value"});
 		} else {
            this.setState({value: value});
            console.log(this.state.value);
            this.setState({msg: "Thank you"});
 		}
 	}

 	handleClick () {
		alert('kek');
	}

  	handleSubmit() {
		//TODO handle this.state.value
  	}

	render() {
		let inp;
		if (this.state.started){
			inp = (<Input onChange={this.handleChange} onSubmit={this.handleSubmit}/>);
		} else {
			inp = <StartButton onClick={this.handleClick} />
		}
		return (
			<div id="board">
				<Output msg={this.state.msg}/>
				<Table />
				{inp}
			</div>
		);
	}
}


