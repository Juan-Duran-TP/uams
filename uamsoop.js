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
    };

    getPassword(){
        return this.password;
    };

    getSignedIn(){
        return this.signedIn;
    };

    setEmail(newEmail){
        this.email = newEmail;
    };

    setPassword(newPassword){
        this.password = newPassword;
    };

    setSignedIn(state){
        this.signedIn = state;
    };

    save(){
        userList.set(this.email, this);
        return this;
    };

    authenticate(){
        if (typeof userList.get(this.email) === "undefined"){
            console.log("User does not exist!");
        }
        else if (userList.get(this.email).getPassword() === this.password){
            console.log("Authentication successful!");
            this.signedIn = true;
        }
        else {
            console.log("Invalid password!");
        }
        return this;
    }

    changePassword(previous, next){
        if (previous === userList.get(this.email).getPassword()){
            console.log("Password change successful!");
            this.password = next;
            this.passwordConfirmation = next;
            this.save();      
        }
        else {
            console.log("Password authentication failed. Password change failed!");
        }
        return this;
    }

    signUp(){
        if (typeof userList.get(this.email) === "undefined"){
            console.log("User creation successful!");
            this.save();
        }
        else {
            console.log("This email is already linked with an account. Account creation failed!");
        }
        return this;
    };

    signIn(){
        this.authenticate();
        if (this.signedIn){
            console.log("You have successfully signed in!");     
        }
        else {
            console.log("Sign in failed!");
        }
        return this;
    };

    deauthenticate(){
        if (! this.signedIn){
            this.signedIn = false;
            console.log("Deauthentication successful");
        }
        else{
            console.log("Deauthentication failed! You are not signed in!")
        }
        return this;
    };

    signOut(){
        if (this.signedIn) {
            this.deauthenticate();
            if (this.signedIn){
                console.log("Signing out successful!");
            }
        }
        else {
            console.log("You are not signed in. Signing out failed!");
        }
        return this;   
    };
}



user = new User("juan","123","123");
user.signOut();
user.signIn();

user.signUp().signIn().changePassword('123','456').signOut();

user.signUp();
