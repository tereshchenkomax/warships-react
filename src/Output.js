import React from 'react';
import styled from 'styled-components';


const Output = (props) => {
    return (
        <div id="output">
            <Pstyled>{props.msg}</Pstyled>
        </div>
    );
};

const Pstyled = styled.p`
  text-align: center;
  color: white;
`

export default Output