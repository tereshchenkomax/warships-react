import React from 'react';
import { styles } from './styles/styles';


const Output = (props) => {
    return (
        <div id="output" style={outputStyles}>
            <p>{props.msg}</p>
        </div>
    );
};

Output.propTypes = {};
Output.defaultProps = {};

const outputStyles = {
    color: styles.color,
    fontFamily: styles.fontFamily,
    textAlign: "center",
    fontSize: '1.2em'
}

export default Output;
