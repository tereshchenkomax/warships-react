import React, {Component} from 'react'
import styled from 'styled-components'

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
            <TDstyled id={this.props.value}>
                {this.props.status}
            </TDstyled>
        );
    }
}

const TDstyled = styled.td`{
    border: 1px solid rgba(125, 255, 125, 0.37);
}`;

Square.propTypes = {};
Square.defaultProps = {};

export default Square;
