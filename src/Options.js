import React, { Component } from 'react'
import Board from './Board'
import Constructor from './Constructor'
import styled from 'styled-components'
import StartButton from './StartButton';


class Options extends Component {
    static defaultProps = {};

    static propTypes = {};
    constructor(props) {
        super(props);
        this.state = {
            started: false,
            valueY: 0,
            valueX: 0
        };
        this.handleClick = this.handleClick.bind(this);
        this.incrementY = this.incrementY.bind(this);
        this.incrementX = this.incrementX.bind(this);
        this.decrementY = this.decrementY.bind(this);
        this.decrementX = this.decrementX.bind(this);

    }

    handleClick() {
        alert('Be Prepared to Play');
        this.setState({started: true});
    }

    incrementY(e) {
        e.preventDefault();
        let val = this.state.valueY;
        if (val <= 9) {
            this.setState({
                valueY: val + 1
            })
        } else {
            this.setState({
                valueY: 10
            });
        }
    };

    decrementY(e) {
        e.preventDefault();
        let val = this.state.valueY;
        if (val > 0) {
            this.setState({
                valueY: val - 1
            })
        } else {
            this.setState({
                valueY: 0
            });
        }
    };

    incrementX(e) {
        e.preventDefault();
        let val = this.state.valueX;
        if (val <= 9) {
            this.setState({
                valueX: val + 1
            })
        } else {
            this.setState({
                valueX: 10
            });
        }
    };

    decrementX(e) {
        e.preventDefault();
        let val = this.state.valueX;
        if (val > 0) {
            this.setState({
                valueX: val - 1
            })
        } else {
            this.setState({
                valueX: 0
            });
        }
    };

    render() {
        if(!this.state.started){
            return (
                <div>
                    <Constructor valueY={this.state.valueY} valueX={this.state.valueX}
                                 incrementY={this.incrementY} incrementX={this.incrementX}
                                 decrementY={this.decrementY} decrementX={this.decrementX} />
                    <StartButton onClick={this.handleClick}/>
                </div>
            )
        } else {
            return (<Board valueY={this.state.valueY} valueX={this.state.valueX}/>);
        }

    }
}

export default styled(Options)`{

}`;
