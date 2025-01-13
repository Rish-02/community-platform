import React from 'react';

function Header({ setView }) {
    return (
        <header>
            <h1>Community Platform</h1>
            <nav>
                <button onClick={() => setView('login')}>Login</button>
                <button onClick={() => setView('register')}>Register</button>
                <button onClick={() => setView('dashboard')}>Dashboard</button>
                <button onClick={() => setView('members')}>Members</button>
            </nav>
        </header>
    );
}

export default Header;
