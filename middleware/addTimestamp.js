


const addTimeStamp = (req, res, next) => {
    req.body.timestamp = new Date();
    // req.body.timestamp = new Date().toLocaleString("sv-SE");
    next();
}

export default addTimeStamp;