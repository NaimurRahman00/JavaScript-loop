/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

*/
console.log("Sum of all the even num from 91 to 129:");

let oddTotal = 0;
for (let i = 91; i <= 129; i += 2) {
    oddTotal = oddTotal + i;
}
console.log(oddTotal);

/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

*/
console.log("Sum of all the even num from 51 to 85:");

let evenTotal = 0;
for (let i = 51; i <= 85; i++) {
    if (i%2 == 0) {
        evenTotal = evenTotal + i;
    }
}
console.log(evenTotal);
