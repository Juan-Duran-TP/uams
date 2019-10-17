const fp = require("./uamsfp");


const user = fp.user("juan","123","123");
//console.log(user);

fp.signOut(user)
fp.signIn(user);
fp.signUp(user);
fp.signUp(user)
fp.signIn(user);
fp.changePassword("123","456",user);
fp.changePassword("345","456",user);

fp.signOut(user);


//console.log(user);