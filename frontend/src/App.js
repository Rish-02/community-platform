import React, { useState } from 'react';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Members from './components/Members';
import './styles.css';

function App() {
    const [view, setView] = useState('login');
    const [token, setToken] = useState(null);

    return (
        <div id="app">
            <Header setView={setView} />
            <main>
                {view === 'login' && <Login setToken={setToken} />}
                {view === 'register' && <Register />}
                {view === 'dashboard' && <Dashboard />}
                {view === 'members' && <Members />}
            </main>
        </div>
    );
}

export default App;
