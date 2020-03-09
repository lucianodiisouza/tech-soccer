import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import './App.css';

import Home from './pages/Home/'
import Brasileirao from './pages/Brasileirao/'
import LiveMatch from './pages/LiveMatch/'


import NavBar from './NavBar'

const App = () => (
    <BrowserRouter>
    <>
        <NavBar />
        <main>
            <Route exact path="/" component={Home} />
            <Route path="/primeira-divisao" component={Brasileirao} />
            <Route path="/ao-vivo" component={LiveMatch} />
        </main>
    </>
    </BrowserRouter>
)

export default App;