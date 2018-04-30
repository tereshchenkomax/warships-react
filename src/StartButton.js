import React from 'react'
// import { styles } from './styles/styles';
import styled from 'styled-components'

const StartButton = (props) => {
    return (
        <div id="button">
            <Button primary onClick={props.onClick}>Start Game</Button>
        </div>
    );
};

const Button = styled.button`
  display: block;
  background: ${props => props.primary ? 'palevioletred' : 'white'};
  color: ${props => props.primary ? 'white' : 'palevioletred'};
  font-size: 1em;
  margin: 1em auto;
  padding: 0.25em 1em;
  border: 2px solid white;
  border-radius: 3px;
`;

export default StartButton;
