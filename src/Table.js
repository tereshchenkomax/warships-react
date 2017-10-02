import React, { Component } from 'react';

export class Table extends Component {

    render() {
        return (
            <div>
                <table>
                    <tbody>
                    <tr>
                        {this.props.renderSquare('01')}
                        {this.props.renderSquare('02')}
                        {this.props.renderSquare(3)}
                        {this.props.renderSquare(4)}
                        {this.props.renderSquare(5)}
                        {this.props.renderSquare(6)}
                        {this.props.renderSquare(7)}

                    </tr>
                    <tr>
                        {this.props.renderSquare()}
                        {this.props.renderSquare()}
                        {this.props.renderSquare()}
                        {this.props.renderSquare()}
                        {this.props.renderSquare()}
                        {this.props.renderSquare()}
                        {this.props.renderSquare()}
                    </tr>
                    <tr>
                        {this.props.renderSquare()}
                        {this.props.renderSquare()}
                        {this.props.renderSquare()}
                        {this.props.renderSquare()}
                        {this.props.renderSquare()}
                        {this.props.renderSquare()}
                        {this.props.renderSquare()}
                    </tr>
                    <tr>
                        {this.props.renderSquare()}
                        {this.props.renderSquare()}
                        {this.props.renderSquare()}
                        {this.props.renderSquare()}
                        {this.props.renderSquare()}
                        {this.props.renderSquare()}
                        {this.props.renderSquare()}
                    </tr>
                    <tr>
                        {this.props.renderSquare()}
                        {this.props.renderSquare()}
                        {this.props.renderSquare()}
                        {this.props.renderSquare()}
                        {this.props.renderSquare()}
                        {this.props.renderSquare()}
                        {this.props.renderSquare()}
                    </tr>
                    <tr>
                        {this.props.renderSquare()}
                        {this.props.renderSquare()}
                        {this.props.renderSquare()}
                        {this.props.renderSquare()}
                        {this.props.renderSquare()}
                        {this.props.renderSquare()}
                        {this.props.renderSquare()}
                    </tr>
                    <tr>
                        {this.props.renderSquare()}
                        {this.props.renderSquare()}
                        {this.props.renderSquare()}
                        {this.props.renderSquare()}
                        {this.props.renderSquare()}
                        {this.props.renderSquare()}
                        {this.props.renderSquare()}
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

