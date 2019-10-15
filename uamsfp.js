const users = new Map();

var myApp = {}
 
myApp.id = 0;
 
myApp.next = function() {
    return myApp.id++;  
}
 
myApp.reset = function() {
    myApp.id = 0;   
}


console.log(myApp.next());
