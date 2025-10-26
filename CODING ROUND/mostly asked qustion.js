//1 write a program to reverse a string in javascript
// function reverseString(str){
//     return str.split("").reverse().join("");
// }
// console.log(reverseString("Geeksforgeeks"));

// 2 write a program to check wheather a string is a palindrome string
// function isPalindrome(str){
//     const reversed = str.split("").reverse().join("");
//     return str === reversed;
// }
// console.log(isPalindrome("gfg"));

// 3 find the largest number in an array in javascript
// function findLargest(arr){
//     let largest = arr[0];
//     for (let i = 1; i<arr.length; i++){
//         if (arr[i] > largest) {
//             largest = arr[i];
//         }
//     }
//     return largest;
// }
// console.log(findLargest([99,5,3,100,1]));
//  Or by using spread operator
// function findLargest(arr) {
//     return Math.max(...arr);
// }
// console.log(findLargest([99,5,3,100,1]));

// 4 how remove the first element from an array in javascipt
// let arr = [5,6,7];
// arr = arr.slice(1);
// console.log(arr);

// 5 write a program to use callback function
// function greet(name,callback) {
//     callback(`hello, ${name}`);
// }
// greet('geek',message => console.log(message));

// 6 write a code to create an arrow function
// const add = (a,b) => a + b;
// console.log(add(6,2));

// 7 write a program to add property to an object
// const obj = {name: 'Kapil'};
// obj.age = 26;
// console.log(obj);

// 8 write a program to delete a property from an object
// const obj = {name: 'kapil',age: 26};
// delete obj.age;
// console.log(obj);

// 9 what will be the output of the given code
// console.log([1,2,3].reduce((a,b) => a + b));

// 10 what will be the output of the given code
// console.log('gfg'.repeat(3));
