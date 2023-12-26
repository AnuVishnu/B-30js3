var readlineSync = require('readline-sync');
let n=readlineSync.question('Enter a number(n) : ');
function printEvenNumbers(){
for(i=2;i<=n;i++){
if(i%2===0){
console.log(i);
        }
    }
}
printEvenNumbers();