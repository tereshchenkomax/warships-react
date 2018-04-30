import React, { Component } from 'react'
import styled from 'styled-components'

export default class Input extends Component {
	render() {
		return (
			<div id="input">
				<form onSubmit={this.props.onSubmit}>
					<label>
          			Name:
          				<input type="text" ref="input" id="guessInput" onChange={this.props.onChange} value={this.props.value} />
        			</label>
        			<InputStyled type="submit" value="Submit" />
    			</form>
			</div>
		);
	}
}

export const InputStyled = styled.input `{
    background-color: rgb(152, 225, 113);
    border-color: rgb(83, 175, 19);
    font-size: 1em;
}`;

