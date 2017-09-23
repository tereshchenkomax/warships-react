import React, { Component } from 'react';
import { Table } from './Table';
import  Input  from './Input';
import  Output  from './Output';

export default class Board extends Component {
	constructor(props) {
    	super(props);
    	this.state = {
      		value: '',
      		msg: 'Put the value in the form'
    	};    	
    	this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);    	
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

  	handleSubmit() {
		//TODO handle this.state.value
  	}

	render() {
		return (
			<div id="board">
				<Output msg={this.state.msg}/>
				<Table />
				<Input onChange={this.handleChange} onSubmit={this.handleSubmit}/>
			</div>
		);
	}
}


