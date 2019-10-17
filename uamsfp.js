const userList = new Map();

const user = function(email, password, passwordConfirmation) {
    this.email = email;
    this.password = password;
    this.passwordConfirmation = passwordConfirmation;
    this.signedIn = false;
    return this;
};
    

const save = function(user){
    userList.set(user.email, user);
};

const signUp = function(user){
    if (typeof userList.get(user.email) === "undefined"){
        console.log("User creation successful!");
        save(user);
    }
    else {
        console.log("This email is already linked with an account. Account creation failed!");
    }
};


const signIn = function(user){
    function authenticate() {
        if (typeof userList.get(user.email) === "undefined"){
            console.log("User does not exist!");
        }
        else if (userList.get(user.email).password === user.password){
            console.log("Authentication successful!");
            user.signedIn = true;
        }
        else {
            console.log("Invalid password!");
        }
    };
    authenticate();
    if (user.signedIn){
        console.log("You have successfully signed in!");     
    }
    else {
        console.log("Sign in failed!");
    }
};

const changePassword = function(previous, next, user){
    if (previous === userList.get(user.email).password){
        console.log("Password change successful!");
        user.password = next;
        user.passwordConfirmation = next;
        save(user);      
    }
    else {
        console.log("Password authentication failed. Password change failed!");
    }

};

const signOut = function(user){
    function deauthenticate(){
        if (user.signedIn){
            user.signedIn = false;
            console.log("Deauthentication successful!");
        }
        else{
            console.log("Deauthentication failed! You are not signed in!")
        }
    };
    if (user.signedIn) {
        deauthenticate();
        if (user.signedIn){
            console.log("Signing out successful!");
        }
    }
    else {
        console.log("You are not signed in. Signing out failed!");
    }
    return this;   
};


module.exports = { user, signIn, signUp, signOut, changePassword};
