import React, { useEffect, useState } from 'react';

function Members() {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        const fetchMembers = async () => {
            const response = await fetch('http://localhost:5000/members');
            const data = await response.json();
            setMembers(data);
        };
        fetchMembers();
    }, []);

    return (
        <div>
            <h2>Members</h2>
            <ul>
                {members.map((member) => (
                    <li key={member._id}>
                        {member.name} - {member.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Members;
