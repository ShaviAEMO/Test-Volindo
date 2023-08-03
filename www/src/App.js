import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/Routes';
import Header from './components/Header';
import './index.css';

function App() {
    return (
        <Router>
            <div>
                <Header />
                <AppRoutes />
            </div>
        </Router>
    );
}

export default App;



