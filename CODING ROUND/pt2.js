// 11 what will be the output of the given code
// console.log(1 + '2');

// 12 output
// console.log('6' - 1);

// 13
// console.log(1 === '1');

// 14
// console.log(null == undefined);

// 15 write a program to find a sum of an array
// function sumArray(arr){
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
// console.log(sumArray([15,6,10,2]));

// 16 write a program to check if a number is prime or not?
// function isPrime(num){
//     if (num <= 1)
//         return false;
//     for (let i = 2; i < num; i++)
//     {
//         if (num % i === 0)
//             return false;
//     }
//     return true;
// }
// console.log(isPrime(7))

// 17 write a program to print fibonacci sequence up to n term
// function fibonacci(n) {
//     let num1 = 0, num2 = 1, nextNum;
//     console.log("fibonacci sequence:");
    
//     for (let i = 1; i <= n; i++) {
//         console.log(num1);
//         nextNum = num1 + num2;
//         num1 = num2;
//         num2 = nextNum;
//     }
// }
// fibonacci(7);

// 18 write a program to find factorial of a number
// function factorial(num){
//     let answer = 1;
//     for (let i = 2; i <= num; i++){
//         answer *= i;
//     }
//     return answer;
// }
// console.log(factorial(7));

// 19 calculate the power of a number in javascipt
// function power(base,exponent)
// {
//     return base ** exponent;
// }
// console.log(power(3,4));

// 20 write a program to print the frequency of element in an array?
// function frequency(arr) {
//     const freq = {};
//     for (let i = 0; i < arr.length; i++){
//         if (freq[arr[i]]){
//             freq[arr[i]] += 1;
//         } else {
//             freq[arr[i]] = 1;
//         }
//     }
//     return freq;
// }
// console.log(frequency([1,1,2,3,3,4]));