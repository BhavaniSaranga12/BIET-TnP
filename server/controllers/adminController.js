const Faculty = require('../models/facultyModel');
const bcrypt = require('bcrypt');

async function add(req, res) {
    const { name, email, password, role } = req.body;
    try {
        const user = await Faculty.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists", status: true });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new Faculty({ name, email, password: hashedPassword, role });
        await newUser.save();

        res.status(201).json({ message: 'User added successfully', status: true });
    } catch (error) {
        console.error('Error registering user:', error.message);
        res.status(500).json({ message: 'Server error', status: false });
    }
}

module.exports = {add} ;

