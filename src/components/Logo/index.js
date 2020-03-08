import React from 'react';
import './Logo.css';
import bola from '../../static/bola.png';

const height = '2em';

const Logo = () => (
    <div className="logo">
        <img src={bola} alt="Logo" style={{height}} />
        <h3 style={{lineHeight: height, fontSize: height }}><strong>Tech</strong> Soccer</h3>
    </div>
);

export default Logo;