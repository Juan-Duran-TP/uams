const users = new Map();

class User{
    constructor(email, password, passwordConfirmation) {
        this.email = email;
        this.password = password;
        this.passwordConfirmation = passwordConfirmation;
        this.signedIn = false;
    };

    getPassword(){
        return this.password;
    }

    save(){
        users.set(this.email, this);
        return this;
    }

    authenticate(){
        if (typeof users.get(this.email) === "undefined"){
            console.log("User does not exist!");
        }
        else if (users.get(this.email).getPassword() === this.password){
            console.log("Authentication successful!");
            this.signedIn = true;
        }
        else {
            console.log("Invalid password!");
        }
        return this;
    }

    changePassword(previous, next){
        if (previous === this.password){
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
        if (typeof users.get(this.email) === "undefined"){
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
    }

    deauthenticate(){
        this.signedIn = false;
        console.log("Deauthentication successful");
        return this;
    }

    signOut(){
        if (this.signedIn) {
            console.log("Signing out successful!");
        }
        else {
            console.log("You are not signed in. Signing out failed!");
        }
        return this;   
    }
}



user = new User("juan","123","123");
user.signIn();



user.signUp().signIn().changePassword('123','456').signOut();

//console.log(user);
user.signUp();
//console.log(users);
//console.log(user.authenticate());
