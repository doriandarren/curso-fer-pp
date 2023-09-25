import { 
    addTwoNumbers, 
    subStractTwoNumbers, 
    timesTwoNumbers,
    divideTwoNumbers
} from "../helpers/math-helpers";



//let name = 'Dorian';
//greet(name);


let num1 = 10;
let num2 = 20;




let total = addTwoNumbers(num1, num2);
console.log('Total: ', total);


total = subStractTwoNumbers(num1, num2);
console.log('Total: ', total);


total = timesTwoNumbers(num1, num2);
console.log('Total: ', total);

total = divideTwoNumbers(num1, num2);
console.log('Total: ', total);