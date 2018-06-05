import React, { Component } from 'react';

export class Table extends Component {
    constructor(props){
        super(props);
        this.state = {
            X : this.props.valueX,
            Y : this.props.valueY
        }
    };

    render() {
        if (this.state.Y>0){
            var y = this.props.valueY;
            this.setState({
                Y: this.props.valueY -1
            });
            return (<div>
                    <table>
                        <tbody>
                        <tr>
                            {this.props.renderSquare(`0${y}`)}
                        </tr>
                        </tbody>
                    </table>
                </div>
            );
        }

    }
}
        // for (let i = ; i > 0; i--) {
        //      tr
        // }
        //
        // return (
        //     <div>
        //         <table>
        //             <tbody>
        //             <tr>
        //                 {this.props.renderSquare('01')}
        //                 {this.props.renderSquare('02')}
        //                 {this.props.renderSquare('03')}
        //                 {this.props.renderSquare('04')}
        //                 {this.props.renderSquare('05')}
        //                 {this.props.renderSquare('06')}
        //                 {this.props.renderSquare('07')}
        //
        //             </tr>
        //             <tr>
        //                 {this.props.renderSquare()}
        //                 {this.props.renderSquare()}
        //                 {this.props.renderSquare()}
        //                 {this.props.renderSquare()}
        //                 {this.props.renderSquare()}
        //                 {this.props.renderSquare()}
        //                 {this.props.renderSquare()}
        //             </tr>
        //             <tr>
        //                 {this.props.renderSquare()}
        //                 {this.props.renderSquare()}
        //                 {this.props.renderSquare()}
        //                 {this.props.renderSquare()}
        //                 {this.props.renderSquare()}
        //                 {this.props.renderSquare()}
        //                 {this.props.renderSquare()}
        //             </tr>
        //             <tr>
        //                 {this.props.renderSquare()}
        //                 {this.props.renderSquare()}
        //                 {this.props.renderSquare()}
        //                 {this.props.renderSquare()}
        //                 {this.props.renderSquare()}
        //                 {this.props.renderSquare()}
        //                 {this.props.renderSquare()}
        //             </tr>
        //             <tr>
        //                 {this.props.renderSquare()}
        //                 {this.props.renderSquare()}
        //                 {this.props.renderSquare()}
        //                 {this.props.renderSquare()}
        //                 {this.props.renderSquare()}
        //                 {this.props.renderSquare()}
        //                 {this.props.renderSquare()}
        //             </tr>
        //             <tr>
        //                 {this.props.renderSquare()}
        //                 {this.props.renderSquare()}
        //                 {this.props.renderSquare()}
        //                 {this.props.renderSquare()}
        //                 {this.props.renderSquare()}
        //                 {this.props.renderSquare()}
        //                 {this.props.renderSquare()}
        //             </tr>
        //             <tr>
        //                 {this.props.renderSquare()}
        //                 {this.props.renderSquare()}
        //                 {this.props.renderSquare()}
        //                 {this.props.renderSquare()}
        //                 {this.props.renderSquare()}
        //                 {this.props.renderSquare()}
        //                 {this.props.renderSquare()}
        //             </tr>
        //             </tbody>
        //         </table>
        //     </div>
//         );
//     }
// }

