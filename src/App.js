import React, { Component } from 'react'
import styled from 'styled-components'
import Header from './Header'
import Options from './Options'
import './styles/App.css'

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Options />
			</div>
		)
	}
}

export default styled(App)`
  text-align: center;
`;
