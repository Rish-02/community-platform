import React, { useEffect, useState } from 'react';

function Dashboard() {
    const [updates, setUpdates] = useState('');
    const [keyMetrics, setKeyMetrics] = useState([]);

    useEffect(() => {
        const fetchDashboard = async () => {
            const response = await fetch('http://localhost:5000/dashboard');
            const data = await response.json();
            setUpdates(data.updates);
            setKeyMetrics(Object.entries(data.keyMetrics));
        };
        fetchDashboard();
    }, []);

    return (
        <div>
            <h2>Dashboard</h2>
            <p>{updates}</p>
            <ul>
                {keyMetrics.map(([key, value]) => (
                    <li key={key}>
                        {key}: {value}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Dashboard;
