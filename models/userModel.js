import users from '../data/user.js'

class userModel {
    getUser() {
        return users;
    }

    registerUser(user){
        return users.push(user);
    }
    
}

export default new userModel();