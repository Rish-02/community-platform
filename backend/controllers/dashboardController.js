const User = require('../models/user');

// Dashboard Logic
exports.getDashboard = (req, res) => {
    res.status(200).json({
        updates: 'Welcome to the community dashboard!',
        keyMetrics: {
            totalMembers: 120,
            activeDiscussions: 15,
            events: 3,
        },
    });
};

// Member Directory Logic
exports.getMembers = async (req, res) => {
    try {
        const members = await User.find({}, 'name email'); // Fetch only name and email
        res.status(200).json(members);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching members' });
    }
};
