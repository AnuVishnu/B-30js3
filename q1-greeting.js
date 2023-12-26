var readlineSync = require('readline-sync');
let name=readlineSync.question('Enter your name. ');
function greetMessage(){
return name
}
let greet = greetMessage();
console.log("Hai,",greet);
