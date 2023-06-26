import User from '../../models/user.js'
import jwt from 'jsonwebtoken'

export { create, get }

async function create(req, res) {
    try {
        // Add the user to the database
        const user = await User.create(req.body);
        const token = createJWT(user);
        // Yes, we can use res.json to send back just a string
        // The client code needs to take this into consideration
        res.json(token);
    } catch (err) {
        // Client will check for non-2xx status code 
        // 400 = Bad Request
        res.status(400).json(err);
    }
}

function createJWT(user) {
    return jwt.sign(
        // data payload
        { user },
        process.env.SECRET,
        { expiresIn: '24h' }
    );
}

async function get(req, res) {
    try {
        const { email, hash } = req.query;
        const user = await User.find({ email: email, password: hash });
        res.json(user);
    } catch (err) {
        res.status(400).json(err);
    }
}