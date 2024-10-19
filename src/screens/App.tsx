import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import Workspace from './workspace/Workspace';
import Header from './header/Header';
import Footer from './footer/Footer';

const withCovers = (Component: React.ComponentType) => {
    return (
      <>
        <Header />
        <Component />
        <Footer />
      </>
    )
}  

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={withCovers(Home)} />
                <Route path="/home" element={withCovers(Home)} />
                <Route path="/workspace" Component={Workspace} />
            </Routes>
        </Router>
    );
}

export default App;
