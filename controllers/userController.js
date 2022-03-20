import userModel from '../models/userModel.js';
import bcrypt from 'bcrypt';
import HttpError from 'http-errors';


const register = (req, res, next) => {
    console.log('---> userController::register');
    try {
        let users = userModel.registerUser(req.body);
        if (users != undefined) {
            next(HttpError(400, {message: 'UPS!! Usuario Existente'}));
        } else {
            users = userModel.registerUser(req.body);
    
            res.json(users);
        }
    } catch (error) {
        next(error)
    }

};

const login = (req, res, next) => {
    console.log('---> userController::register');
    try {
        const users = userModel.loginUser(req.body);
    if (users === undefined){
        next(HttpError(400, {message: 'Usuario o contraseña incorrecto!'}));
    } else {
        if (bcrypt.compareSync(req.body.password, users.password))

        res.json(users);
    }
    } catch (error) {
        next(error)
    }

};

export default {
    register,
    login
}
