import React from 'react';
import './GlobalStyles/GlobalStyles';
import './App.css';
import { TopMenu } from './Pages/TopMenu';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from './Pages/Search';
import { About } from './Pages/About';

export function App(): React.ReactElement {
    return (
        <Router>
            <div className="app">
                <TopMenu />
                <div className="page-container">
                    <Route path="/search" component={Search} />
                    <Route path="/about" component={About} />
                </div>
            </div>
        </Router>
    );
}