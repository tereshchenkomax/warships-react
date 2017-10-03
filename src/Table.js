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
                        {this.props.renderSquare('03')}
                        {this.props.renderSquare('04')}
                        {this.props.renderSquare('05')}
                        {this.props.renderSquare('06')}
                        {this.props.renderSquare('07')}

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

