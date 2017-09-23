import React, { Component } from 'react';
import { Table } from './Table';
import  Input  from './Input';

export default class Board extends Component {
	constructor(props) {
    	super(props);
    	this.state = {
      		value: 'A0',
      		msg: 'Put the value'
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
 		}
 	}

  	handleSubmit() {
		//TODO handle this.state.value
  	}

	render() {
		return (
			<div id="board">				
				<Table />
				<Input onChange={this.handleChange} onSubmit={this.handleSubmit}/>
			</div>
		);
	}
}


