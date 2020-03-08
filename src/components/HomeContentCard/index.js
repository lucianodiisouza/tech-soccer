import React from 'react';
import './HomeContentCard.css';
import Home from '../../pages/Home';

const HomeContentCard = ({title, text}) => (
    <div className="home-content-card">
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
)

export default HomeContentCard;