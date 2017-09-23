import React, { Component } from 'react';

export default class Input extends Component {
	render() {
		return (
			<div id="input">
				<form onSubmit={this.props.onSubmit}>
					<label>
          			Name:
          				<input type="text" ref="input" id="guessInput" onChange={this.props.onChange} value={this.props.value} />
        			</label>
        			<input type="submit" value="Submit" />
    			</form>
			</div>
		);
	}
}

