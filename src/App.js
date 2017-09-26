import React, { Component } from 'react'
import Board from './Board.js'
import Header from './Header'
import './styles/App.css'

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Board />        
			</div>
		)
	}
}

export default App
