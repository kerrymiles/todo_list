import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import Workspace from './workspace/Workspace';
import Header from './header/Header';
import Footer from './footer/Footer';
import Docs from './docs/Docs';
import ComingSoon from './coming-soon/ComingSoon';

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
                <Route path='/product/docs' element={withCovers(Docs)} />
                <Route path='/templates/work' Component={ComingSoon} />
                <Route path='/templates/school' Component={ComingSoon} />
                <Route path='/templates/life' Component={ComingSoon} />
                <Route path='/templates/wiki' Component={ComingSoon} />
                <Route path='/product/ai' Component={ComingSoon} />
                <Route path='/product/plugins' Component={ComingSoon} />
                <Route path='/pricing/free' Component={ComingSoon} />
                <Route path='/pricing/premium' Component={ComingSoon} />
                <Route path='/login' Component={ComingSoon} />
            </Routes>
        </Router>
    );
}

export default App;
