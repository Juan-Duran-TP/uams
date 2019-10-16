const userList = new Map();

class User{
    constructor(email, password, passwordConfirmation) {
        this.email = email;
        this.password = password;
        this.passwordConfirmation = passwordConfirmation;
        this.signedIn = false;
    };

    getEmail(){
        return this.email;
    }

    getPassword(){
        return this.password;
    }

    getSignedIn(){
        return this.signedIn;
    }

    setEmail(newEmail){
        this.email = newEmail;
    }

    setPassword(newPassword){
        this.password = newPassword;
    }

    setSignedIn(state){
        this.signedIn = state;
    }

    
};

function save(){
    userList.set(user.email, user);
};

function signUp(){
    if (typeof userList.get(user.getEmail()) === "undefined"){
        console.log("User creation successful!");
        save();
    }
    else {
        console.log("This email is already linked with an account. Account creation failed!");
    }
};


function signIn(user){
    function authenticate() {
        if (typeof userList.get(user.getEmail()) === "undefined"){
            console.log("User does not exist!");
        }
        else if (userList.get(user.getEmail()).getPassword() === user.getPassword()){
            console.log("Authentication successful!");
            user.setSignedIn(true);
        }
        else {
            console.log("Invalid password!");
        }
    };
    authenticate();
    if (user.getSignedIn()){
        console.log("You have successfully signed in!");     
    }
    else {
        console.log("Sign in failed!");
    }
};

function changePassword(previous, next, user){
    if (previous === userList.get(user.getEmail()).getPassword()){
        console.log("Password change successful!");
        user.password = next;
        user.passwordConfirmation = next;
        save();      
    }
    else {
        console.log("Password authentication failed. Password change failed!");
    }

}

function signOut(user){
    function deauthenticate(){
        if (user.getSignedIn()){
            user.setSignedIn(false);
            console.log("Deauthentication successful!");
        }
        else{
            console.log("Deauthentication failed! You are not signed in!")
        }
    };
    deauthenticate();
    if (! user.getSignedIn()) {
        console.log("Signing out successful!");
    }
    else {
        console.log("You are not signed in. Signing out failed!");
    }
    return this;   
};

user = new User("juan","123","123");
//console.log(user);
signOut(user)
signIn(user);
signUp(user);
signUp(user)
signIn(user);
changePassword("123","456",user);
changePassword("345","456",user);

signOut(user);


//console.log(user);