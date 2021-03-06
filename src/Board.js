import React, {Component} from 'react';
import {Table} from './Table';
import Input from './Input';
import Output from './Output';
import Square from './Square';

const ships = [
    {locations: ["06", "16", "26"], hits: ["", "", ""]},
    {locations: ["24", "34", "44"], hits: ["", "", ""]},
    {locations: ["10", "11", "12"], hits: ["", "", ""]}
];

export default class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            started: false,
            status: '',
            value: '',
            parsedValue: '',
            msg: 'PLEASE Start game, push the button below',
            boardSize: 7,
            numShips: 3,
            shipLength: 3,
            shipsSunk: 0,
            guesses: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.renderSquare = this.renderSquare.bind(this);
    }

    handleChange(event) {
        const value = event.target.value;
        console.log(value);
        if (event.target.value.length > 2) {
            this.setState({msg: "Put correct value"});
        } else {
            this.setState({value: value});
            this.setState({msg: "Thank you"});
        }
    }

    handleClick() {
        alert('Be Prepared to Play');
        this.setState({started: true});
        let cell = this.refs.test;
        console.log(cell);
    }

    handleSubmit(e) {

        e.preventDefault();

        let location = this.parseGuess(e);
        this.setState({parsedValue: location});
        //console.log(location);
        if (location) {
            this.state.guesses++;
            var hit = this.fire(location);
            if (hit) {
                this.renderSquare('hit', location);
                this.setState({status: 'hit'});
            } else {
                this.setState({status: 'miss'});
            }
            if (hit && this.state.shipsSunk === this.state.numShips) {
                alert(`ALL SHIPS IS SUNK FOR ${this.state.guesses} GUESSES`);
            }
        }

    }

    fire(guess) {
        for (let i = 0; i < this.state.numShips; i++) {
            var ship = ships[i];
            var index = ship.locations.indexOf(guess); // Выбор из массива указанного значения
            if (index >= 0) {
                ship.hits[index] = "hit";
                this.setState({msg: "Hit!"});
                if (this.isSunk(ship)) {
                    alert("СУКА БЛЯТЬ ПОТОПИЛА МНЕ КОРАБЭЛЬ!");
                    this.shipsSunk++;
                }
                console.log(ships);
                return true;
            }
        }
        this.setState({msg: "Miss!"});
        return false;
    }

    isSunk(ship) {
        for (let i = 0; i < this.state.shipLength; i++) {
            if (ship.hits[i] !== "hit") {
                return false;
            }
            ;
        }
        return true;
    }

    parseGuess() {
        let guess = this.state.value;
        var alphabet = ["A", "B", "C", "D", "E", "F", "G"];
        if (guess === null || guess.length !== 2) {
            alert("ПАШОЛ НАХОЙ!")
        }
        else {
            let firstChar = guess.charAt(0).toUpperCase();
            let row = alphabet.indexOf(firstChar);
            let column = guess.charAt(1);
            if (isNaN(row) || isNaN(column)) {
                alert("ДА ТЫ ВАЩЕ ЧТОЛЕ АХУЕЛЛА?")
            }
            else if (row < 0 || row > this.state.boardSize ||
                column < 0 || column > this.state.boardSize) {
                alert("ВВОДИ БЛЯТЬ ПРАВИЛЬНЫЕ СИМВОЛЫ ТЫ ЧТО ТУПОЙ ЧТОЛЕ БЛЯТЬ?");
            }
            else {
                return row + column;
            }
        }
        return null;
    }

    renderSquare(id) {
        if (id !== this.state.parsedValue) {
            return <Square value={id} status=''/>;
        } else {
            return <Square value={id} status={this.state.status}/>;
        }
    }

    render() {
        // let inp;
        // if (this.state.started) {
        //     inp = (<Input onChange={this.handleChange} onSubmit={this.handleSubmit}/>);
        // } else {
        //     inp = <StartButton onClick={this.handleClick}/>
        // }
        return (
            <div id="board">
                <Output msg={this.state.msg}/>
                <Table renderSquare={this.renderSquare} valueY={this.props.valueY} valueX={this.props.valueX}/>
                <Input onChange={this.handleChange} onSubmit={this.handleSubmit}/>
            </div>
        );
    }
}



