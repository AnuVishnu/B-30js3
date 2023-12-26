var readlineSync = require('readline-sync');
let n=readlineSync.question('Enter the last number(n). ');
function printNumber(){
for(i=1;i<=n;i++){
console.log(i);
    }
}
printNumber();