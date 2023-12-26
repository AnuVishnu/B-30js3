var readlineSync = require('readline-sync');
let n = parseInt(readlineSync.question('Enter the number of rows. '));
function printPattern(){
for(i = 1; i<=n; i++){
let star = "";
for(j = 1; j<=i; j++){
star += '*'
}
console.log(star);
}
}
printPattern();