// external.js - prints variables and computed results
console.log('num1 =', num1);
console.log('num2 =', num2);
console.log('num3 =', num3);


// 4- print in console result of summation Num1 + Num2 with 6 digits
var sumNum1Num2 = Number(num1) + Number(num2);
console.log('sum num1 + num2 ', sumNum1Num2.toFixed(6));

// 5- print summation of num1 , num30
var sumNum1Num3 = Number(num1) + Number(num3);
console.log('sum num1 + num3:', sumNum1Num3);

// 7- multiply num1 with x
var multiplyNum1X = num1 * x;
console.log('num1 * x:', multiplyNum1X);


//Receive from user 2 values using dialoge methods then print them as string or
//sum them if we can convert these values

var x = prompt("Please enter first num:");
console.log(`Number 1 is: ${num1}`);
var y = prompt("Please enter second num:");
console.log(`Number 2 is: ${num2}`);

var sum = parseInt(x) + parseInt(y);
console.log(`Sum of 2 Nums is: ${sum}`);


//Recive from user 5 numbers and print these nums in cinole with 5 digits 
for (var i = 1; i <= 5; i++) {
    var num = parseFloat(prompt(`Enter number ${i}:`));
    console.log(num.toFixed(5));

}