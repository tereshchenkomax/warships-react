import React from 'react';

const Output = (props) => {
    return (
        <div id="output">
            <p>{props.msg}</p>
        </div>
    );
};

Output.propTypes = {};
Output.defaultProps = {};

export default Output;
