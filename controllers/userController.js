// import userModel from '../models/userModel.js';
import bcrypt from 'bcrypt';

const register = (req, res, next) => {

    const user = {username: req.body.username, password: req.body.password};

    res.json(user);

}

const login = (req, res, next) => {
    const password = {username: req.body.username, password: req.body.password};
    
    res.json(password)

}

export default {
    register,
    login
}