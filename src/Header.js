import React from 'react';
import logo from './img/logo.svg'

const Header = (props) => {
    return (
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    );
};

Header.propTypes = {};
Header.defaultProps = {};

export default Header;
