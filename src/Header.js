import React from 'react';
import logo from './img/logo.svg'
import styled, { keyframes } from 'styled-components'


const Header = (props) => {
    return (
            <Rotate className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </Rotate>
    );
};

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  display: block;
  // animation: ${rotate360} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
  text-align: center;
`;


Header.propTypes = {};
Header.defaultProps = {};

export default Header;
