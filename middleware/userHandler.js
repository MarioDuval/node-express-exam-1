import HttpError from "http-errors";

const validateUserEmail = (req, res, next) => {
    if (req.body.username) {
        if(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(req.body.username)) {
            next()
        } else {
            next(HttpError(400, { message: 'Error formato username '}));
        }
    }
}

export default {validateUserEmail};