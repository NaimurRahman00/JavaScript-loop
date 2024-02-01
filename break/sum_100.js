/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/

let num1 = 1;
let num2 = 2;


while (true) {

    if (num1 >= 100) {
        break;
    }
    num1 = num1 + num2;
    console.log(num1);
    num2 = num2 + 1;

}
