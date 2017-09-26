import React from 'react';
import { styles } from './styles/styles';

const StartButton = (props) => {
    return (
        <div id="button">
            <button style={buttonStyle} onClick={props.onClick}>Start Game</button>
        </div>
    );
};


const buttonStyle = {
    display:'block',
    margin: '0 auto',
    textAlign: styles.textAlign,
    transitionDuration: '0.1s',
    backgroundColor: '#3e9240',
    borderRadius: '20px',
    borderBottom: '4 solid #C24648',
    padding: '15 32',
    color: "white",
    textDecoration: "none",
    fontSize: 16,
    fontFamily: 'Oxygen',
    letterSpacing : 2,
    width: 200
}

StartButton.propTypes = {};
StartButton.defaultProps = {};

export default StartButton;
