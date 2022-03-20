import users from '../data/user.js'

class userModel {
    
    registerUser(user){
        users.push(user);
        return users.find(element => element.username == user.username);
    }

    loginUser(user) {
        return users.find(element => (element.username == user.username));
    }
    
}

export default new userModel();
