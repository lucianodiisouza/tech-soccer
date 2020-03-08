import React from 'react'

// CSS
import './Home.css';

// Componentes
import Logo from '../../components/Logo';
import HomeContentCard from '../../components/HomeContentCard';

const Home = () => (
    <div className="home">
        <div className="home-image">
            <div className="home-logo">
                <Logo />
            </div>
        </div>
        <div className="home-content-grid">
            <HomeContentCard  title="Torça pelo seu time" text="Veja os resutlados do seus time favorito" />
            <HomeContentCard  title="Torça pelo seu time" text="Veja os resutlados do seus time favorito" />
            <HomeContentCard  title="Torça pelo seu time" text="Veja os resutlados do seus time favorito" />
        </div>
    </div>
);

export default Home;