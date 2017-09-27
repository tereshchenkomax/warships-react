import React, {Component} from 'react';
import {Table} from './Table';
import Input from './Input';
import Output from './Output';
import StartButton from './StartButton';

export default class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            started: false,
            value: '',
            msg: 'PLEASE Start game, push the button below',
            boardSize: 7,
            numShips: 3,
            shipLength: 3,
            shipsSunk: 0
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
            this.setState({msg: "Thank you"});
        }
    }

    handleClick() {
        alert('Be Prepared to Play');
        this.setState({started: true});
    }

    handleSubmit(e) {
        //TODO handle this.state.value
        e.preventDefault();
        let guess = this.state.value;
        var alphabet = ["A", "B", "C", "D", "E", "F", "G"];
        if (guess === null || guess.length !== 2) {
            alert("ПАШОЛ НАХОЙ!")
        }
        else {
            let firstChar = guess.charAt(0);
            let upperFirstChar = firstChar.toUpperCase();
            let row = alphabet.indexOf(upperFirstChar);
            let column = guess.charAt(1);
            if (isNaN(row) || isNaN(column)) {
                alert("ДА ТЫ ВАЩЕ ЧТОЛЕ АХУЕЛЛА?")
            }
            else if (row < 0 || row >= this.state.boardSize ||
                column < 0 || column >= this.state.boardSize) {
                alert("ВВОДИ БЛЯТЬ ПРАВИЛЬНЫЕ СИМВОЛЫ ТЫ ЧТО ТУПОЙ ЧТОЛЕ БЛЯТЬ?");
            }
            else {
                console.log(row + column);
                return row + column;
            }
        }
        return null;
    }

    render() {
        let inp;
        if (this.state.started) {
            inp = (<Input onChange={this.handleChange} onSubmit={this.handleSubmit}/>);
        } else {
            inp = <StartButton onClick={this.handleClick}/>
        }
        return (
            <div id="board">
                <Output msg={this.state.msg}/>
                <Table/>
                {inp}
            </div>
        );
    }
}

Board.defaultProps = {}




