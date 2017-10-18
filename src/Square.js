import React, {Component} from 'react';

class Square extends Component {

    shouldComponentUpdate(nextProps) {
        if (nextProps.status === "" || nextProps.status === ""){
            return false;
        } else {
            return true;
        }
    }

    render() {
        return (
            <td style={squareStyle} id={this.props.value}>
                {this.props.status}
            </td>
        );
    }
}

const squareStyle = {
    color:'red'
}

Square.propTypes = {};
Square.defaultProps = {};

export default Square;
